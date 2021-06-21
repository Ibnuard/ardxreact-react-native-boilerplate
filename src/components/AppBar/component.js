import * as React from 'react'
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper'
import { CustomText } from '..';
import { Colors } from '../../styles';
import styles from './styles';
import { useTheme } from 'react-native-paper';

const AppBar = ({ navigation, previous, title }) => {

    return (
        <Appbar.Header style={styles.container}>
            {previous ? <Appbar.BackAction size={18} onPress={navigation.goBack} /> : null}
            {/*<Appbar.Content title="My awesome app" />*/}
            <View style={previous ? null : styles.content}>
                <CustomText type={'title'} style={{ color: Colors.COLOR_WHITE }}>
                    {title}
                </CustomText>
            </View>
        </Appbar.Header>
    );
}

export default AppBar