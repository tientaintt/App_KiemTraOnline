import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icons from 'react-native-vector-icons/Entypo'
import { MenuView } from '@react-native-menu/menu';
import { equalDayCurrentDay, isCurrentDay } from '../../utils/utils';
const logo = require('../../asset/image/classroom_avatar.png');
const CardHorizontalUser = (

    props: any

) => {
    const [actions, setActions] = useState<any>([]);
    useEffect(() => {
        if (props?.exam) {
            if (!props.exam.isSubmitted  && equalDayCurrentDay(props.exam.startDate)) {
                setActions([

                    {
                        id: props.idFunction1,
                        title: props.labelFunction1,
                        titleColor: '#2367A2',
                    },
                    {
                        id: props.idFunction2,
                        title: props.labelFunction2,
                        titleColor: '#2367A2',


                    },

                ])
            }else{
                setActions([

                    {
                        id: props.idFunction1,
                        title: props.labelFunction1,
                        titleColor: '#2367A2',
                    },
                  
                    
                ])
            }
        }
    },[])
    return (
        <TouchableOpacity onPress={props?.onPress} className='w-full  flex-row justify-between rounded-sm' style={props?.contentContainerStyle}>
            <View className='flex-row w-4/5 '>
                <View>
                    <Image className='w-[120px] h-[95px]' source={logo} />
                </View>
                <View className='mx-4'>

                    {

                        props.content
                    }
                </View>

            </View>
            <View className='justify-center '>
                {
                    !props.disabledMenu &&
                    <MenuView

                        onPressAction={({ nativeEvent }) => {
                            props.clickMenu(nativeEvent.event);
                        }}

                        actions={actions}>

                        <Icons name='dots-three-vertical' size={25}></Icons>

                    </MenuView>
                }

            </View>
        </TouchableOpacity>
    )
}

export default CardHorizontalUser