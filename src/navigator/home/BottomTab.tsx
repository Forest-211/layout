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

export type BottomTabParamList = {
    Home: undefined;
    Category: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTab'>;

interface Props {
    navigation: RootStackNavigation;
    route: Route;
}

interface State {
    icon: string;
}

export default class BottomTab extends Component<Props> {
    state = {
        icon: 'home',
    };
    getHeaderTitle() {
        const { navigation, route } = this.props;
        const name = getFocusedRouteNameFromRoute(route) || 'Home';
        let headerTitle = '首页';
        switch (name) {
            case 'Home':
                headerTitle = '首页';
                break;
            case 'Category':
                headerTitle = '分类';
                break;
        }
        navigation.setOptions({
            headerTitle,
        });
    }
    componentDidMount() {
        this.getHeaderTitle();
    }

    componentDidUpdate() {
        this.getHeaderTitle();
    }
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'red',
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ size, focused }) => {
                        let icon = 'home';
                        switch (route.name) {
                            case 'Home':
                                icon = 'home';
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
                <Tab.Screen name="Category" component={Category} />
            </Tab.Navigator>
        );
    }
}
