import * as React from 'react'
import { View, Text } from 'react-native';
import { withTheme } from 'react-native-paper';
import { TEXT_STYLE } from '../../styles/Text';
import styles from './styles'

const CustomText = (props) => {
    const { colors } = props.theme;

    function _GET_TYPE() {
        switch (props?.type) {
            case 'title':
                return <Text style={TEXT_STYLE('medium', 'bold', props?.style)}>{props?.text}</Text>;
                break;
            case 'subtitle':
                return <Text style={TEXT_STYLE('normal', 'bold', props?.style)}>{props?.text}</Text>;
                break;
            case 'description':
                return <Text style={TEXT_STYLE('normal', 'normal', { ...styles.descriptionText, ...props.style })}>{props?.text}</Text>;
                break;
            case 'normal':
                return <Text style={TEXT_STYLE('normal', 'normal', props?.style)}>{props?.text}</Text>;
                break;
            case 'timestamp':
                return <Text style={TEXT_STYLE('extrasmall', 'normal', { ...styles.descriptionText, ...props.style })}>{props?.text}</Text>;
                break;
            default:
                return <Text style={TEXT_STYLE('normal', 'normal', props?.style)}>{props?.text}</Text>;
                break;
        }
    }

    return _GET_TYPE()
}

export default withTheme(CustomText);