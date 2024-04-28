import { View, Text, Image, TextInput, } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/'
import IconsEntypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonIcon from './ButtonIcon'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const userAvatar = require('../../asset/image/useravatar.png')
const HeaderUser = ({ getDataSearch, onPressSearch, type }) => {
 const navigation=useNavigation();
  const routeCurrentName=navigation.getState().routes[navigation.getState().index].name

  return (
    <View className=' w-full bg-[#0077BA] h-[120px] border rounded-b-[20px] fixed'>
       
     {
         routeCurrentName != 'Home' && (<View className='pl-3'>
         <ButtonIcon
           icon={
             <IconIonicons name='chevron-back-circle-outline' size={30}
             ></IconIonicons>
           }
           onPress={() => navigation.goBack()}
         >
         </ButtonIcon>
       </View>)
     }
      <View className='flex-row items-center px-2 bottom-5 absolute '>
        {type ? <Text className='text-white w-full font-semibold text-[24px] text-center'>{type}</Text> : (<View className='left-3 flex-row items-center'>
          <Image className='rounded-full w-10 h-10' source={userAvatar}></Image>
          <View className='w-3/4 px-3 relative flex-row items-center'>
            <TextInput placeholder="Search..."
              onChangeText={(value) => {
                console.log('Gia tri search ', value)
                if (value == '')
                  value = undefined;
                getDataSearch(value)
              }}
              placeholderTextColor="#0077BA"
              className='w-full bg-white px-3 rounded-[32px]  '>
            </TextInput>
            <View className='absolute right-5 '
            >
              <TouchableOpacity
                onPress={onPressSearch}
              >

                <IconFeather name='search' size={25} color="black" />
              </TouchableOpacity>
            </View></View>
          <TouchableOpacity
          >
            <IconsEntypo name='menu' size={40} color="white">

            </IconsEntypo>
          </TouchableOpacity>
        </View>)}



      </View>
    </View>
  )
}

export default HeaderUser