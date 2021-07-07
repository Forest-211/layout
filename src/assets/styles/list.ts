import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        position: 'relative',
    },
    city: {
        color: '#333',
        fontWeight: '500',
        zIndex: 10,
    },
    cityItems: {
        backgroundColor: '#fff',
    },
    letter: {
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 0,
        zIndex: 10,
        height: '100%',
        justifyContent: 'center',
    },
    letterActice: {
        color: 'red',
        fontWeight: 'bold',
        // backgroundColor: 'rgb(204, 22, 58)',
    },
    letterItem: {
        height: 20,
        width: 20,
        lineHeight: 20,
        textAlign: 'center',
        borderRadius: 50,
    },
    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
});

export default styles;
