import { StyleSheet } from 'react-native';
import { Colors, Scaler } from '../../styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Scaler.scaleSize(46),
        backgroundColor: Colors.COLOR_PRIMARY,
        borderRadius: 6
    },

    containerDisabled: {
        width: '100%',
        height: Scaler.scaleSize(46),
        backgroundColor: Colors.COLOR_GRAY,
        borderRadius: 6
    },

    button: {
        width: '100%',
        height: Scaler.scaleSize(46),
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: Colors.COLOR_WHITE
    },

    indicator: {
        paddingRight: Scaler.scaleSize(8)
    }
})

export default styles