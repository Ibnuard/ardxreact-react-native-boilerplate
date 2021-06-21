import { StyleSheet } from 'react-native';
import { Scaler } from '../../styles';

const styles = StyleSheet.create({
    container: {
        elevation: 0,
        alignItems: 'center'
    },

    content: {
        paddingHorizontal: Scaler.scaleSize(14)
    }
})

export default styles