import * as React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import { CustomText } from '..';
import { Colors } from '../../styles';
import { TEXT_STYLE } from '../../styles/Text';
import styles from './styles'

const Button = ({
    title = 'Button',
    isLoading = false,
    disabled = false,
    onPress,
    containerStyle,
    buttonStyle,
    textStyle
}) => {
    return (
        <View style={disabled ? styles.containerDisabled : [styles.container, containerStyle]}>
            <TouchableRipple
                style={[styles.button, buttonStyle]}
                centered
                onPress={disabled ? null : onPress}
                rippleColor={disabled ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, .32)"}
            >
                <View style={styles.button}>
                    {isLoading ? <ActivityIndicator color={Colors.COLOR_WHITE} style={styles.indicator} /> : null}
                    <Text style={TEXT_STYLE('normal', 'medium', { ...styles.text, ...textStyle })}>
                        {title}
                    </Text>
                </View>
            </TouchableRipple>
        </View>
    )
}

export default Button