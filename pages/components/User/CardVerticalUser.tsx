import { View, Text, Image } from 'react-native'
import React from 'react'
const logo = require('../../../asset/image/logomonhoc.png')
const CardVerticalUser = ({
    contentContainerStyle,
    contentTextStyle,
    content,
    onPress,
}: any

) => {
    return (
        <View className='w-[85px] h-[85px] justify-center items-center' style={{...contentContainerStyle}}>
            <Image className='rounded-full w-10 h-10' source={logo}></Image>
            <Text style={contentTextStyle}>{content.name}</Text>
        </View>
    )
}

export default CardVerticalUser