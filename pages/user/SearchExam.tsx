import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShowResult from './ShowResult'

const SearchExam = ({type,navigation}) => {
  return (
    <View className='flex-1'>
      <Text className='text-center text-lg'>{type}</Text>
      <ShowResult  type={type} navigation={navigation}></ShowResult>
    </View>
  )
}

export default SearchExam

const styles = StyleSheet.create({})