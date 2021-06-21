import { StyleSheet } from 'react-native';
import { Scaler } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Scaler.scaleSize(24)
    }
})

export default styles