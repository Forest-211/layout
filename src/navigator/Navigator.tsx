import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationProp,
} from '@react-navigation/stack';
import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import BottomTab from './home/BottomTab';
import ZhiHu from '../screen/zhihu/ZhiHu';
import Form from '../screen/form/Form';
import Search from '../screen/search/Search';

export type RootStackParamList = {
    BottomTab: undefined;
    ZhiHu: undefined;
    Form: undefined;
    Search: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyleInterpolator:
                            HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator:
                            CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true, // 是否开启手势
                        gestureDirection: 'horizontal', // 手势方向
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                },
                                ios: {},
                            }),
                        },
                        headerBackTitleVisible: false,
                    }}>
                    <Stack.Screen name="BottomTab" component={BottomTab} />
                    <Stack.Screen name="ZhiHu" component={ZhiHu} />
                    <Stack.Screen name="Form" component={Form} />
                    <Stack.Screen name="Search" component={Search} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
