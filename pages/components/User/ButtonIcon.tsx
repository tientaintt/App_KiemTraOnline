import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


const ButtonIcon = ({ containerStyle, icon, iconStyle, onPress }: any) => {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            {icon}
        </TouchableOpacity>
    );
}
export default ButtonIcon;