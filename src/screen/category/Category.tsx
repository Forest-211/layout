import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '../../navigator/Navigator';

interface Props {
    navigation: RootStackNavigation;
}
export default class Category extends Component<Props> {
    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            headerTransparent: true,
        });
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>category</Text>
                <Button
                    title="知乎"
                    onPress={() => navigation.navigate('ZhiHu')}
                />
                <Button
                    title="表单"
                    onPress={() => navigation.navigate('Form')}
                />
            </View>
        );
    }
}
