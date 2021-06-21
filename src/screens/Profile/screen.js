import * as React from 'react'
import { View, Text } from 'react-native'
import { CustomText } from '../../components'
import styles from './styles'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <CustomText>
                Hallo test
            </CustomText>
        </View>
    )
}

export default ProfileScreen