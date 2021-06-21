import * as React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const TabBarIcon = (props) => {

    let iconName;

    if (props.route.name === 'Home') {
        iconName = props?.focused
            ? 'home'
            : 'home';
    } else if (props.route.name === 'Profile') {
        iconName = props?.focused ?
            'user'
            : 'user';
    }

    return (
        <AntDesign name={iconName} size={props?.size} color={props?.color} />
    )
}

export default TabBarIcon