import React from "react";
import {
    Button,
    Text,
    TouchableOpacity
} from 'react-native';



const ButtonText = ({
    customContainerClassName,
    customContainerStyle,
    disabled,
    label,
    customLabelStyle,
    customLabelClassName,
    onPress }: any) => {
    return (
        <TouchableOpacity
            className={` ${customContainerClassName} `}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                backgroundColor: '#0077BA',
                // shadow
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 4.65,

                elevation: 3,
                // end shadow
                ...customContainerStyle
            }}
            onPress={onPress}
            disabled={disabled}
        >
            <Text className={` ${customLabelClassName}`} style={{ color: '#ffff',  ...customLabelStyle }}>{label}</Text>
        </TouchableOpacity>
    );
};
export default ButtonText;