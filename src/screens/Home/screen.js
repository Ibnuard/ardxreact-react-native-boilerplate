import * as React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import { PreferencesContext } from '../../context/Context'
import { useTheme } from 'react-native-paper';
import styles from './styles'
import { CustomText, CustomStatusBar, Button, Input } from '../../components';
import { GET_CURRENT_DATETIME } from '../../utils/Utils';

const HomeScreen = ({ navigation }) => {
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext)
    const { colors } = useTheme();

    const [text, setText] = React.useState('')

    const currentDatetime = GET_CURRENT_DATETIME()

    return (
        <View style={styles.container}>
            <CustomStatusBar />
            <Text style={{ color: colors.text }}>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TabStack')}>
                <Text style={{ color: colors.text }} >Go to Tab Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={{ color: colors.text }} >Go to Profile</Text>
            </TouchableOpacity>
            <CustomText type={'title'} />
            <CustomText type={'subtitle'} />
            <CustomText type={'description'} />
            <CustomText type={'normal'} />
            <CustomText type={'timestamp'} />
            <CustomText type={'timestamp'} text={`Datetime : ${currentDatetime}`} />
            <Input value={text} onChangeText={(val) => setText(val)} />
            <Button title={'Change Theme'} onPress={() => toggleTheme()} />
        </View>
    )
}

export default HomeScreen