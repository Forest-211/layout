import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
    render() {
        return (
            <View>
                <Text>app</Text>
                <Icon name="rocket" size={30} color="#900" />
            </View>
        );
    }
}
