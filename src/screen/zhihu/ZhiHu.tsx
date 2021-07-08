import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RootStackNavigation } from '../../navigator/Navigator';

interface Props {
    navigation: RootStackNavigation;
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
    statusBar: StatusBarType;
}

export default class ZhiHu extends Component<Props> {
    state: State = {
        statusBar: {
            hidden: false,
            animated: true,
            // backgroundColor: '#6070fc',
            barStyle: 'dark-content',
            showHideTransition: 'fade',
        },
    };
    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            header: () => <Icon name="home" size={32} color="#fff" />,
            headerStyle: {
                backgroundColor: '3dcaff',
            },
        });
    }

    render() {
        const { statusBar } = this.state;
        return (
            <SafeAreaView>
                <StatusBar {...statusBar} />
                <ScrollView>
                    <View>
                        <Text>zhihu</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
