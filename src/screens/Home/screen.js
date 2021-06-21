import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PreferencesContext } from '../../context/Context'
import { useTheme } from 'react-native-paper';
import styles from './styles'

const HomeScreen = ({ navigation }) => {
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext)
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Text style={{ color: colors.text }}>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TabStack')}>
                <Text style={{ color: colors.text }} >Go to Tab Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={{ color: colors.text }} >Go to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleTheme()}>
                <Text style={{ color: colors.text }} >Test switch theme</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen