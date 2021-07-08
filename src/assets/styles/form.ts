// import BaseStyleSheet from './base';
import { StyleSheet } from 'react-native';
import { hp, wp } from '../../utils';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    box: {
        width: wp(94),
        backgroundColor: '#fff',
        paddingBottom: 20,
    },
    form: {
        width: '94%',
        height: 44,
        marginTop: 10,
        borderBottomColor: '#ccc',
        alignItems: 'baseline',
    },
    input: {
        height: 36,
        lineHeight: 36,
        color: '#ccc',
        marginTop: -6,
    },
    submit: {
        width: wp(40),
        height: hp(6),
        backgroundColor: 'blue',
        marginTop: 30,
        marginBottom: 30,
    },
});

export default styles;
