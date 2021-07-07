import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles/common';
import { RootStackNavigation } from '../navigator/Navigator';

interface Props {
    navigation: RootStackNavigation;
    [propName: string]: unknown;
}
export default class Base extends Component<Props> {
    state = {
        style: styles,
    };

    render() {
        return (
            <View>
                <Text>Base</Text>
            </View>
        );
    }
}
