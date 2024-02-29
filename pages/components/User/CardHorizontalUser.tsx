import { View, Text, Image } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Entypo'
const logo = require('../../../asset/image/classroom_avatar.png');
const CardHorizontalUser = (
    {
        content,
        contentContainerStyle,
        onPress,
    }: any
) => {
    return (
        <View className='w-full  flex-row justify-between ' style={contentContainerStyle}>
            <View className='flex-row w-4/5 '>
                <View>
                    <Image className='w-[120px] h-[95px]' source={logo} />
                </View>
                <View className='mx-4'>

                    <Text className='font-medium text-[18px] text-[#0077BA]'>{content.name}</Text>
                    <Text className='font-light text-[14px] text-black'>Score: {content.score}</Text>
                </View>

            </View>
            <View className='justify-center '>
                <Icons name='dots-three-vertical' size={25}></Icons>
            </View>
        </View>
    )
}

export default CardHorizontalUser