import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    ImageBackground,
    NativeSyntheticEvent,
    NativeScrollEvent,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
// import Base from '../Base';
import { RootStackNavigation } from '../../navigator/Navigator';
import { wp } from '../../utils';
import carousel from '../../mock/carousel';
import styles from '../../assets/styles/home';
import style from '../../assets/styles/common';
import floor from '../../mock/float';
import spike from '../../mock/spike';
import list from '../../mock/goodsList';

const sideWidth = wp(96);
const itemWidth = sideWidth + wp(2) * 2;
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
    swiper: string[];
    activity: string[];
    statusBar: StatusBarType;
    tab: string[];
    isActive: number;
}
export default class Home extends Component<Props> {
    state: State = {
        swiper: [],
        activity: [
            'https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/174326/21/17535/68092/60dd7df4Ee9af3862/f344a861b7d69cb7.jpg!q70.jpg.dpg',
            'https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/192139/13/11143/87249/60dd7dcbE2741188e/c8ea2f8b813ecf07.jpg!q70.jpg.dpg',
            'https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/135892/10/17818/69963/60dd8b51E4eab5f55/d29bcfe8de49a3d7.jpg!q70.jpg.dpg',
        ],
        statusBar: {
            hidden: false,
            animated: true,
            backgroundColor: '#fff',
            barStyle: 'dark-content',
            showHideTransition: 'fade',
        },
        tab: [
            '首页',
            '酒水饮料',
            '图书',
            '医药健康',
            '生鲜',
            '运动',
            '电脑办公',
            '手机',
            '食品',
            '家具厨具',
            '个护清洁',
            '男装',
            '内衣配饰',
            '母音童装',
            '美妆',
        ],
        isActive: 0,
    };

    componentDidMount() {}

    componentDidUpdate() {}

    renderItem({ item }: { item: string }) {
        return (
            <Image
                source={{ uri: item }}
                style={{
                    height: 140,
                    width: '100%',
                }}
                resizeMode="contain"
            />
        );
    }

    handleOnScroll({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) {
        console.log('nativeEvent:', nativeEvent);
        const { y } = nativeEvent.contentOffset;
        const { statusBar } = this.state;
        const { navigation } = this.props;
        const base = 30;
        navigation.setOptions({
            headerTransparent: y > base ? true : false,
            headerStyle: {
                paddingTop: getStatusBarHeight(),
                backgroundColor: y > base ? '#fff' : '#6070fc',
            },
            headerTintColor: y > base ? '#fff' : '#6070fc',
            headerLeft: () => (
                <Icon name="bars" size={48} color={y > base ? 'red' : '#333'} />
            ),
        });
        statusBar.barStyle = y > base ? 'dark-content' : 'light-content';
        statusBar.hidden = y > base ? true : false;
        statusBar.backgroundColor = 'red';
        this.setState({ statusBar });
    }

    handleClickTab(item: string, index: number) {
        this.setState({ isActive: index });
        Alert.alert(item);
    }

    render() {
        const { activity, tab, isActive } = this.state;
        return (
            <SafeAreaView style={{ flex: 1, position: 'relative' }}>
                {/* <StatusBar {...statusBar} translucent /> */}

                <Image
                    source={{
                        uri: 'https://img11.360buyimg.com/jdphoto/s80x80_jfs/t27847/91/107794072/6854/14716732/5b850ecaN644d2983.png',
                    }}
                    style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        right: 0,
                        top: '20%',
                        zIndex: 10,
                    }}
                />
                {/* 自定义头部 */}
                <View>
                    <View style={[style.p10, style.fdr, styles.header]}>
                        <Image
                            source={{
                                uri: 'https://img11.360buyimg.com/jdphoto/s80x80_jfs/t27847/91/107794072/6854/14716732/5b850ecaN644d2983.png',
                            }}
                            style={{ width: 30, height: 30 }}
                        />
                        <View style={[style.fdr]}>
                            <View
                                style={[
                                    style.fdr,
                                    style.between,
                                    style.px10,
                                    style.ml10,
                                    style.circle,
                                    styles.search,
                                ]}>
                                <Icon name="search1" size={18} color="red" />
                                <Icon name="scan1" size={18} color="#999" />
                            </View>
                        </View>
                        <Icon
                            style={[style.ml10]}
                            name="message1"
                            size={26}
                            color="#fff"
                        />
                    </View>
                </View>
                <ScrollView
                    style={[styles.container]}
                    scrollEventThrottle={10}
                    onScroll={(event) => this.handleOnScroll(event)}>
                    {/* tab 切换 */}
                    <View style={[styles.tab, style.flex, style.fdr]}>
                        <FlatList
                            style={[style.flex]}
                            contentContainerStyle={{ alignItems: 'center' }}
                            horizontal
                            keyExtractor={(item) => item}
                            data={tab}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        this.handleClickTab(item, index)
                                    }>
                                    <Text
                                        style={[
                                            style.px10,
                                            isActive === index
                                                ? style.f4
                                                : style.f5,
                                            { color: '#fff' },
                                        ]}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                        <View style={[style.xyr, { width: 70 }]}>
                            <Icon name="bars" size={24} color="#fff" />
                            <Text
                                style={[
                                    style.f5,
                                    { marginLeft: 5, color: '#fff' },
                                ]}>
                                分类
                            </Text>
                        </View>
                    </View>

                    <View
                        style={[
                            { width: '100%' },
                            style.center,
                            style.flex,
                            style.m0,
                            styles.carousel,
                        ]}>
                        {/* 轮播 */}
                        <View style={[style.mb10]}>
                            <Carousel
                                loop
                                autoplay
                                data={carousel}
                                renderItem={this.renderItem}
                                sliderWidth={itemWidth}
                                itemWidth={itemWidth}
                                layout={'tinder'}
                                layoutCardOffset={9}
                            />
                        </View>
                        {/* 活动板块 */}
                        <View
                            style={[
                                style.flex,
                                style.fdr,
                                style.border,
                                style.mr10,
                                style.center,
                            ]}>
                            {activity.map((item: string) => (
                                <Image
                                    key={item}
                                    source={{ uri: item }}
                                    style={{ width: '33.33%', height: 100 }}
                                />
                            ))}
                        </View>
                    </View>

                    {/* 金刚区 */}
                    <View
                        style={[
                            style.flex,
                            styles.district,
                            style.mt10,
                            { width: '100%', height: 150, overflow: 'hidden' },
                        ]}>
                        {floor.map((item) =>
                            item.map((sitem) => (
                                <View
                                    key={sitem.title}
                                    style={[
                                        styles.districtItem,
                                        style.center,
                                        {
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 14,
                                        },
                                    ]}>
                                    <Image
                                        source={{ uri: sitem.image }}
                                        style={{ width: 40, height: 40 }}
                                    />
                                    <Text style={[style.f6]}>
                                        {sitem.title}
                                    </Text>
                                </View>
                            )),
                        )}
                    </View>
                    {/* 秒杀 */}
                    <View style={[styles.spike, style.center, style.mb10]}>
                        <ImageBackground
                            source={{
                                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTO0QEO0QEO0WFuoNDe0SEuwREewREYfJP0kAAAAIdFJOUwB9ZA+zIzZPcd7tbgAAA/BJREFUeNrt3TGP41QUBtDZtRbaTVig3SxIaS0sQz1oEO0uwaaFIk4LAeK/j+1kMg6FBynzZnPDOfVUnz5dX9vPmZubSW/uHtzeQEjjGt+Jg5ju1Bg1hgtbKuzGqDF8LH+NavyjOIjp51GNfxAHMb0Y1fi1OIjp1ajG78VBUF8fW/y9MIi/VdgpCCu7f+R2mwuDsF4eavxWFAT2YWjx54IgtF/e3N3+LQYAAAAAAACeyKvtYr58Lwci+242+FMSxPXJ7OBXWRBVtriv8TyXBkF9Mzv6ShpEH8Yd45iYXo5aPHsrD0L6bVzjL+RByJ1idsJWQUSfntb4d4kQ0IvTGr+WCAF9OK2xD3uJ6I/TGn8pEQJanNZ4LhHUGD6G2b9IBDUGSwWoMf9XHrhxBbz+4Ap4Gc0VcDSIK+CgJtfAsXmugI+YuIatYvTk2Bf+RPXTQ40/kwbhx7FhTFx+/Ipr4KcIuQZ+GBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC3PZEBwWZYVekz0FhedPJcEkRVFtVoVciB4izvGMbF3iqqq667HoiBwjYuqbtbrqtBjAu8UZdX0PV5ZKgg8jcu6bppm7SaP6DtF023HakzgpaLqh7FpTOhpnPWrcdOYxsS+xRuWim4au8cj8lIxTGNLBRe9NRSTB3+y4YFbXa0MYy532A7yqT+o6nX/+kONudwW7980F1Nbxf5PnNXkQuX7x2mTszY/HA2S1nlJO1uVbhiXdbNp28mnwt3uXJaFYXxeiXsiTJRuWW/a5bZtd+uJO7jske2ZR2+jD6ubENPEWzXtu17bTLzdyLse+xrvrBaXjqWkjLdut0ONl+1axAkvetWwulV6nKTG5WEY9+N4Yqu4MYrPuwPpLnrLtp285HFGvJvtocbLXWVxSzYt9he9/pIn5AQ1ru+HcTeObRXparw53IHsVmr89Mp6e6zxcr0SSOKLnktemho3oxo3apxsWhzvQMyKJBe7UY13KzdyqaeFWZGmxvt05/sau+ClnhZdyPJ48ny/3bx7oMZqHHkaz+8TVuPk00LISfI9jImFhNNP47lZ8Sy3eBJ5hqVCjZPdQs/dRNuN49fY64/0MS88cEs1JrL+ufzCy+jUNR69/hDy03M06HnGxT7mhZBTbW37g5rzxw5qcta0GB0NMo1TBFxvHo7Nq3GyaXE8qGlWpMi32yr+w0dMnL28Ne1269h8wruPTdsul9OflHL2OK6a3fARkyyS5Ntd75p2+MBfi5Nux4dPSh0iTLVW9D9e3PjPHqljrtY+8E84JwT8PJe9ovSzQUkHRRewWZy+x7kWpx3ImY0N4BIueCIAALgE/wB5Hy4N/5rMxgAAAABJRU5ErkJggg==',
                            }}
                            style={{ height: 38, width: '100%' }}>
                            <View
                                style={[style.fdr, style.between, style.mt10]}>
                                <Text
                                    style={[style.f4, style.ml10, style.bold]}>
                                    京东秒杀
                                </Text>
                                <Text
                                    style={[
                                        style.f5,
                                        style.mr10,
                                        { color: 'red' },
                                    ]}>
                                    更多秒杀{' '}
                                    <Icon
                                        name="rightcircle"
                                        size={16}
                                        color="red"
                                    />
                                </Text>
                            </View>
                        </ImageBackground>

                        <View
                            style={[
                                style.mt10,
                                style.mb10,
                                style.arc,
                                style.flex,
                                style.fdr,
                                style.around,
                                { height: 160 },
                            ]}>
                            {spike.map((item) => (
                                <View
                                    key={item.cover}
                                    style={[style.flex, style.fdc, style.xyc]}>
                                    <Image
                                        source={{ uri: item.cover }}
                                        style={{ width: 55, height: 55 }}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={[
                                            style.f5,
                                            {
                                                marginTop: 5,
                                                color: '#f2270c',
                                                fontWeight: '500',
                                            },
                                        ]}>
                                        ¥{item.price}
                                    </Text>
                                    <Text
                                        style={[
                                            style.f6,
                                            style.lineThrough,
                                            style.bold,
                                            { color: '#999' },
                                        ]}>
                                        ¥ {item.originalPrice}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* 商品列表 */}
                    <View
                        style={[
                            style.fdr,
                            style.evenly,
                            style.wrap,
                            style.mt10,
                        ]}>
                        {list.map((item, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.listItem,
                                    style.arc,
                                    style.hidden,
                                    { marginBottom: 15 },
                                ]}>
                                <Image
                                    source={{ uri: item.cover }}
                                    style={[{ width: 173, height: 173 }]}
                                />
                                <Text numberOfLines={2} style={[style.p10]}>
                                    {item.name}
                                </Text>
                                <View
                                    style={[
                                        style.fdr,
                                        style.between,
                                        style.mb10,
                                        { alignItems: 'center' },
                                    ]}>
                                    <Text
                                        style={[
                                            style.f5,
                                            style.bold,
                                            { color: 'red' },
                                        ]}>
                                        ¥ {item.price}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.similar,
                                            style.px10,
                                            style.hidden,
                                            style.arc,
                                        ]}>
                                        看相似
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
