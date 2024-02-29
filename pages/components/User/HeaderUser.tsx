import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/'
import IconsEntypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler'
const userAvatar = require('../../../asset/image/useravatar.png')
const HeaderUser = () => {
  return (
    <View className=' w-full bg-[#0077BA] h-[165px] border rounded-b-[20px] relative'>
      <View className='flex-row items-center px-2 bottom-5 absolute'>
        <Image className='rounded-full w-10 h-10' source={userAvatar}></Image>
        <View className='w-3/4 px-3'>
          <TextInput placeholder="Search..."
            placeholderTextColor="#0077BA"
            className=' bg-white pl-3 rounded-[32px]'>
          </TextInput>
        </View>
        <TouchableOpacity >
          <IconsEntypo name='menu' size={40} color="white">

          </IconsEntypo>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderUser