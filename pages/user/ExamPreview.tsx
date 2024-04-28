import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExamPreview = () => {
  return (
    <View>
      <View className=' bg-slate-300 justify-center items-center m-auto p-2 rounded-[12px]'>

        <Text className='font-semibold text-[#0077BA] text-[32px]'>Exam name</Text>
        <Text>Exam id</Text>
      </View>
      <View className='m-2'>
        <Text className='font-semibold text-[16px] text-black'>Description</Text>
        <View>
          <Text>HHHHHHHHHHHHHHHHHHHHHHHHH</Text>
        </View>
      </View>
    </View>
  )
}

export default ExamPreview

const styles = StyleSheet.create({})