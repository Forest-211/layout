import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { RootStackNavigation } from '../../navigator/Navigator';
import styles from '../../assets/styles/form';
import style from '../../assets/styles/common';

type showHideTransition = 'fade' | 'slide' | 'none';
type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

interface StatusBarType {
    hidden?: boolean;
    animated?: boolean;
    backgroundColor?: string;
    barStyle?: StatusBarStyle;
    showHideTransition?: showHideTransition;
}

interface Props {
    navigation: RootStackNavigation;
}

interface State {
    statusBar: StatusBarType;
    phone: string;
    email: string;
    address: string;
    description: string;
    detail: string;
}
export default class Form extends Component<Props> {
    state: State = {
        statusBar: {
            hidden: false,
            animated: true,
            backgroundColor: '#fff',
            barStyle: 'dark-content',
            showHideTransition: 'fade',
        },
        phone: '',
        email: '',
        address: '',
        description: '',
        detail: '',
    };

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({});
    }
    render() {
        const { statusBar, phone, email, address, description, detail } =
            this.state;
        return (
            <SafeAreaView style={[style.flex]}>
                <StatusBar {...statusBar} />
                <ScrollView style={[styles.container]}>
                    <View
                        style={[
                            style.center,
                            style.mt10,
                            style.arc,
                            style.p10,
                            styles.box,
                        ]}>
                        <View
                            style={[
                                styles.form,
                                style.flex,
                                style.xyr,
                                style.center,
                                style.bb,
                            ]}>
                            <Text style={[style.f5]}>Phone:</Text>
                            <TextInput
                                style={[styles.input, style.ml10, style.flex]}
                                value={phone}
                            />
                        </View>
                        <View
                            style={[
                                styles.form,
                                style.flex,
                                style.xyr,
                                style.center,
                                style.bb,
                            ]}>
                            <Text style={[style.f5]}>Email:</Text>
                            <TextInput
                                style={[styles.input, style.ml10, style.flex]}
                                value={email}
                            />
                        </View>
                        <View
                            style={[
                                styles.form,
                                style.flex,
                                style.xyr,
                                style.center,
                                style.bb,
                            ]}>
                            <Text style={[style.f5]}>Address:</Text>
                            <TextInput
                                style={[styles.input, style.ml10, style.flex]}
                                value={address}
                            />
                        </View>
                        <View
                            style={[
                                styles.form,
                                style.flex,
                                style.xyr,
                                style.center,
                                style.bb,
                            ]}>
                            <Text style={[style.f5]}>Description:</Text>
                            <TextInput
                                style={[styles.input, style.ml10, style.flex]}
                                value={description}
                            />
                        </View>
                        <View
                            style={[
                                style.flex,
                                style.xyr,
                                style.center,
                                {
                                    marginTop: 20,
                                    width: '94%',
                                    borderBottomColor: '#ccc',
                                    alignItems: 'flex-start',
                                },
                            ]}>
                            <Text style={[style.f5]}>Detail:</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    style.ml10,
                                    style.flex,
                                    style.border,
                                    style.arc,
                                    style.p10,
                                    {
                                        minHeight: 200,
                                        fontSize: 14,
                                        borderColor: '#ccc',
                                        lineHeight: 16,
                                    },
                                ]}
                                value={detail}
                                multiline
                            />
                        </View>
                        <TouchableOpacity
                            style={[
                                style.xyr,
                                style.circle,
                                style.center,
                                styles.submit,
                            ]}>
                            <Text
                                style={[
                                    style.f3,
                                    { color: '#fff', letterSpacing: 1 },
                                ]}>
                                submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
