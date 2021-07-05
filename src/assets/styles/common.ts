import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // flex 相关
    flex: {
        flex: 1,
    },
    fdr: {
        flexDirection: 'row',
    },
    fdc: {
        flexDirection: 'column',
    },
    between: {
        justifyContent: 'space-between',
    },
    around: {
        justifyContent: 'space-around',
    },
    evenly: {
        justifyContent: 'space-evenly',
    },
    mt10: {
        marginTop: 10,
    },
    mb10: {
        marginBottom: 10,
    },
    ml10: {
        marginLeft: 10,
    },
    mr10: {
        marginRight: 10,
    },

    // 字体及大小
    f1: {
        fontSize: 36,
    },
    f2: {
        fontSize: 28,
    },
    f3: {
        fontSize: 24,
    },
    f4: {
        fontSize: 20,
    },
    f5: {
        fontSize: 16,
    },
    f6: {
        fontSize: 12,
    },

    // 边框
    border: {
        borderWidth: 1,
    },
    bt: {
        borderTopWidth: 1,
    },
    bb: {
        borderBottomWidth: 1,
    },
    bl: {
        borderLeftWidth: 1,
    },
    br: {
        borderRightWidth: 1,
    },

    // 圆角边框
    circle: {
        borderRadius: 50,
    },
    arc: {
        borderRadius: 10,
    },

    // 文字颜色
    titleColor: {
        color: '#333',
    },
    descColor: {
        color: '#666',
    },
    light: {
        color: '#fff',
    },

    // 遮罩层
    mask: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        zIndex: 10,
    },
});

export default styles;
