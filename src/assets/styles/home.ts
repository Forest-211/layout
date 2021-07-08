import { StyleSheet } from 'react-native';
import { wp } from '../../utils';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    header: {
        backgroundColor: '#110f64',
        alignItems: 'center',
        borderWidth: 0,
    },
    search: {
        alignItems: 'center',
        width: wp(75),
        height: 30,
        backgroundColor: '#fff',
    },
    tab: {
        width: '100%',
        height: 44,
        // alignItems: 'center',
        backgroundColor: '#110f64',
    },
    carousel: {
        backgroundColor: '#110f64',
    },
    district: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    districtItem: {
        width: 70,
    },
    // 秒杀
    spike: {
        width: '94%',
        height: 160,
        backgroundColor: '#fff',
    },

    // 商品列表
    list: {},
    listItem: {
        width: '46%',
        backgroundColor: '#fff',
    },
    similar: {
        backgroundColor: '#f0f2f5',
        color: 'grey',
        lineHeight: 20,
    },
});

export default styles;
