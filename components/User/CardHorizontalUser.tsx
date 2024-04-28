import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Entypo'
import { MenuView } from '@react-native-menu/menu';
const logo = require('../../asset/image/classroom_avatar.png');
const CardHorizontalUser = (
    {
        content,
        contentContainerStyle,
        onPress,
        clickMenu,
        idFunction1,
        labelFunction1,
        idFunction2,
        labelFunction2,
        disabledMenu
    }: any
) => {
    return (
        <TouchableOpacity onPress={onPress} className='w-full  flex-row justify-between rounded-sm' style={contentContainerStyle}>
            <View className='flex-row w-4/5 '>
                <View>
                    <Image className='w-[120px] h-[95px]' source={logo} />
                </View>
                <View className='mx-4'>

                    {
                        content
                    }
                </View>

            </View>
            <View className='justify-center '>
                {
                    !disabledMenu&&<MenuView

                    onPressAction={({ nativeEvent }) => {
                        clickMenu(nativeEvent.event);
                    }}

                    actions={[

                        {
                            id: idFunction1,
                            title: labelFunction1,
                            titleColor: '#2367A2',



                        },
                        {
                            id: idFunction2,
                            title: labelFunction2,
                            titleColor: '#2367A2',


                        },
                    ]}>

                    <Icons name='dots-three-vertical' size={25}></Icons>

                </MenuView>
                }
                
            </View>
        </TouchableOpacity>
    )
}

export default CardHorizontalUser