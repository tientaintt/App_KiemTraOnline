import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const logo = require('../../asset/image/classroom_avatar.png')
const CardVerticalUser = ({
    contentContainerStyle,
    contentTextStyle,
    content,
    onPress,
}: any

) => {
    return (
        <TouchableOpacity onPress={onPress} className='w-[85px] h-[85px] justify-center items-center flex' style={{ ...contentContainerStyle }}>
            <Image className='rounded-full w-10 h-10' source={logo}></Image>
            {content}
            
        </TouchableOpacity>
    )
}

export default CardVerticalUser