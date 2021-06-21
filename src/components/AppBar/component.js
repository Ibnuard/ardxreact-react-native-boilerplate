import * as React from 'react'
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper'
import { TEXT_STYLE } from '../../styles/Text';
import styles from './styles';

const AppBar = ({ navigation, previous }) => {
    return (
        <Appbar.Header style={{ elevation: 0 }}>
            {previous ? <Appbar.BackAction size={18} onPress={navigation.goBack} /> : null}
            {/*<Appbar.Content title="My awesome app" />*/}
            <View style={{ paddingHorizontal: previous ? 0 : 14 }}>
                <Text style={TEXT_STYLE()}>Test</Text>
            </View>
        </Appbar.Header>
    );
}

export default AppBar