import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


const ButtonIcon = ({ containerStyle, customClassName, icon, iconStyle, onPress }: any) => {
    return (
        <TouchableOpacity
            className={customClassName}
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