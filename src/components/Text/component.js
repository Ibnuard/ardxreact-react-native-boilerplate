import * as React from 'react'
import { View, Text } from 'react-native';
import { withTheme } from 'react-native-paper';
import { TEXT_STYLE } from '../../styles/Text';
import styles from './styles'

const CustomText = ({ type, style, children }) => {

    function _GET_TYPE() {
        switch (type) {
            case 'title':
                return <Text style={TEXT_STYLE('medium', 'bold', style)}>{children}</Text>;
                break;
            case 'subtitle':
                return <Text style={TEXT_STYLE('normal', 'bold', style)}>{children}</Text>;
                break;
            case 'description':
                return <Text style={TEXT_STYLE('normal', 'normal', { ...styles.descriptionText, ...style })}>{children}</Text>;
                break;
            case 'normal':
                return <Text style={TEXT_STYLE('normal', 'normal', style)}>{children}</Text>;
                break;
            case 'timestamp':
                return <Text style={TEXT_STYLE('extrasmall', 'normal', { ...styles.descriptionText, ...style })}>{children}</Text>;
                break;
            default:
                return <Text style={TEXT_STYLE('normal', 'normal', style)}>{children}</Text>;
                break;
        }
    }

    return _GET_TYPE()
}

export default withTheme(CustomText);