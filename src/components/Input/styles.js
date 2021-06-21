import { StyleSheet } from 'react-native';
import { Colors, Scaler } from '../../styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Scaler.scaleSize(52),
        borderRadius: 6,
        backgroundColor: Colors.COLOR_LIGHT_GRAY,
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerDark: {
        width: '100%',
        height: Scaler.scaleSize(52),
        borderRadius: 6,
        backgroundColor: Colors.COLOR_DARK_BACKGROUND,
        flexDirection: 'row',
        alignItems: 'center'
    },

    label: {
        alignSelf: 'flex-start',
        paddingVertical: Scaler.scaleSize(8)
    },

    input: {
        flex: 1,
        height: Scaler.scaleSize(52),
        paddingHorizontal: Scaler.scaleSize(10)
    },

    eye: {
        padding: Scaler.scaleSize(10)
    },

    error: {
        color: Colors.COLOR_RED,
        alignSelf: 'flex-start',
        paddingVertical: Scaler.scaleSize(8)
    },

    errorBg: {
        backgroundColor: 'rgba(255, 0, 0, 0.20)',
        borderWidth: 1,
        borderColor: Colors.COLOR_RED
    }


})

export default styles