import * as React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../styles';
import { TEXT_STYLE } from '../../styles/Text';
import styles from './styles'
import Octicons from 'react-native-vector-icons/Octicons'
import { PreferencesContext } from '../../context/Context';

const Input = ({
    value,
    onChangeText,
    placeholder = 'Enter text here!',
    securedText = false,
    showEye = false,
    label = '',
    error = '',
}) => {

    const { isThemeDark } = React.useContext(PreferencesContext)

    return (
        <>
            {label.length ? <Text style={TEXT_STYLE('normal', 'medium', styles.label)}>Label</Text> : null}
            <View style={isThemeDark ? [styles.containerDark, error.length ? styles.errorBg : null] : [styles.container, error.length ? styles.errorBg : null]} >
                <TextInput
                    style={TEXT_STYLE('normal', 'normal', styles.input)}
                    placeholder={placeholder}
                    secureTextEntry={securedText}
                    placeholderTextColor={Colors.COLOR_GRAY}
                    value={value}
                    onChangeText={(val) => onChangeText(val)}
                />
                {showEye ? <TouchableOpacity style={styles.eye}>
                    <Octicons name={securedText ? 'eye' : 'eye-closed'} size={20} color={Colors.COLOR_GRAY} />
                </TouchableOpacity> : null}
            </View>
            {error.length ? <Text style={TEXT_STYLE('small', 'normal', styles.error)}>Error message!!</Text> : null}
        </>
    );
};

export default Input;