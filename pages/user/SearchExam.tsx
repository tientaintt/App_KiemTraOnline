import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShowResult from './ShowResult'

const SearchExam = ({type}) => {
  return (
    <View className='flex-1'>
      <Text className='text-center text-lg'>{type}</Text>
      <ShowResult  type={type} ></ShowResult>
    </View>
  )
}

export default SearchExam

const styles = StyleSheet.create({})