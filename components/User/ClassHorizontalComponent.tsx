import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardHorizontalUser from './CardHorizontalUser'

const ClassHorizontalComponent = ({item,classPress}) => {
  return (
    <CardHorizontalUser
            onPress={() => classPress(item.id)}
            disabledMenu={true}
            content={
              <View>

                <Text className='font-medium text-[18px] text-[#0077BA]'>Classname: {item.className}</Text>
                <Text className='font-light text-[14px] text-black'>Class code: {item.classCode}</Text>
              </View>
            }
            contentContainerStyle={
              {
                margin: 6,
                backgroundColor: '#FFFF'
              }
            }
          >
          </CardHorizontalUser>
  )
}

export default ClassHorizontalComponent

const styles = StyleSheet.create({})