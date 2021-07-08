import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    NativeSyntheticEvent,
    NativeScrollEvent,
    // SectionList,
} from 'react-native';
import city, { City } from '../../mock/city';
import style from '../../assets/styles/common';
import styles from '../../assets/styles/list';

export default class List extends Component {
    letter = React.createRef();
    handleOnScroll({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) {
        console.log('nativeEvent:', nativeEvent);
        console.log('letter:', this.letter);
    }
    render() {
        return (
            <SafeAreaView>
                {/* <Text style={[style.f4, style.p10, styles.fixed, styles.city]}>
                    A
                </Text> */}
                <ScrollView
                    style={[styles.container]}
                    scrollEventThrottle={10}
                    onScroll={(event) => this.handleOnScroll(event)}>
                    {/* <SectionList
                        sections={city}
                        keyExtractor={(item) => item}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={[style.f4, style.p10, styles.city]}>
                                {title}
                            </Text>
                        )}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[style.p10, styles.cityItems]}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )}
                    /> */}
                    {city.map((item: City) => (
                        <View key={item.title}>
                            <Text
                                ref={() => this.letter}
                                style={[style.f4, style.p10, styles.city]}>
                                {item.title}
                            </Text>
                            <View style={[styles.cityItems]}>
                                {item.data.length > 0 &&
                                    item.data.map((c: string) => (
                                        <TouchableOpacity
                                            key={c}
                                            style={[style.p10]}>
                                            <Text>{c}</Text>
                                        </TouchableOpacity>
                                    ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <View style={[style.center, styles.letter]}>
                    {city.map((item: City, index: number) => (
                        <TouchableOpacity key={item.title}>
                            <Text
                                style={[
                                    style.f5,
                                    styles.letterItem,
                                    index === 0 ? styles.letterActice : {},
                                ]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </SafeAreaView>
        );
    }
}
