import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/home/Home';
import Category from '../../screen/category/Category';
import {
    getFocusedRouteNameFromRoute,
    RouteProp,
} from '@react-navigation/native';
import { RootStackNavigation, RootStackParamList } from '../Navigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native';
import List from '../../screen/list/List';

export type BottomTabParamList = {
    Home: undefined;
    Category: undefined;
    List: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTab'>;

interface Props {
    navigation: RootStackNavigation;
    route: Route;
}

type showHideTransition = 'fade' | 'slide' | 'none';
type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

interface StatusBarType {
    hidden?: boolean;
    animated?: boolean;
    backgroundColor?: string;
    barStyle?: StatusBarStyle;
    showHideTransition?: showHideTransition;
}
interface State {
    icon: string;
    statusBar: StatusBarType;
}

export default class BottomTab extends Component<Props> {
    state: State = {
        icon: 'home',
        statusBar: {
            hidden: false,
            animated: true,
            // backgroundColor: '#fff',
            barStyle: 'dark-content',
            showHideTransition: 'fade',
        },
    };
    getHeaderTitle() {
        const { navigation, route } = this.props;
        console.log('route:', route);
        const { statusBar } = this.state;
        const name = getFocusedRouteNameFromRoute(route) || 'Home';
        let headerTitle = '首页';
        switch (name) {
            case 'Home':
                headerTitle = '';
                break;
            case 'List':
                headerTitle = '地级市';
                break;
            case 'Category':
                headerTitle = '分类';
                break;
        }
        navigation.setOptions({
            headerTitle,
            headerTransparent: name === 'Home' ? true : false,
            headerStyle: {
                backgroundColor: name === 'Home' ? '#110f64' : '#fff',
            },
        });
        statusBar.barStyle = name === 'Home' ? 'light-content' : 'dark-content';
        statusBar.backgroundColor = 'red';
        this.setState({ statusBar });
    }

    componentDidMount() {
        this.getHeaderTitle();
    }

    componentDidUpdate() {}

    render() {
        // const { statusBar } = this.state;
        return (
            <SafeAreaView style={{ flex: 1, position: 'relative' }}>
                {/* <StatusBar {...statusBar} translucent /> */}
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: 'red',
                        tabStyle: {
                            height: 40,
                            overflow: 'hidden',
                            margin: 0,
                        },
                    }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ size, focused }) => {
                            let icon = 'home';
                            switch (route.name) {
                                case 'Home':
                                    icon = 'home';
                                    break;
                                case 'List':
                                    icon = 'graphic-eq';
                                    break;
                                case 'Category':
                                    icon = 'category';
                            }
                            return (
                                <Icon
                                    name={icon}
                                    size={size}
                                    color={focused ? 'red' : '#ccc'}
                                />
                            );
                        },
                    })}>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="List" component={List} />
                    <Tab.Screen name="Category" component={Category} />
                </Tab.Navigator>
            </SafeAreaView>
        );
    }
}
