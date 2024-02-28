import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/'
const userAvatar = require('../../../asset/image/useravatar.png')
const HeaderUser = () => {
  return (
    <View className='w-full bg-[#0077BA] h-[165px] border rounded-b-[20px]'>
      <View className='flex-row items-center'>
        <Image className='rounded-full w-10 h-10' source={userAvatar}></Image>
        <View className='w-3/4 px-3'>
          <TextInput placeholder="Search..."
            placeholderTextColor="#0077BA" 
            className=' bg-white pl-3 rounded-[32px]'>
          </TextInput>
        </View>

      </View>
    </View>
  )
}

export default HeaderUser