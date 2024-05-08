import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardHorizontalUser from './CardHorizontalUser'
import { isCurrentDay, setFormatDateYYYYMMDD } from '../../utils/utils'

const ExamHorizontalComponent = ({ item, index, clickMenu }) => {
  return (
    <CardHorizontalUser
      idFunction1='PreviewExam'
      labelFunction1='Review exam'
      exam={item}
      idFunction2={'DoExam'}

      labelFunction2={'Do exam'}

      clickMenu={(data) => clickMenu(data, item.id)}

      content={(
        <View key={`Today` + index}>
          <Text key={`Todayn` + index} className='font-medium text-[18px] text-[#0077BA]'>{item.testName}</Text>
          <Text key={`Todaya` + index} className='font-light text-[14px] text-black'>Start date: {setFormatDateYYYYMMDD(item.startDate)}</Text>
          <Text key={`Todaym` + index} className='font-light text-[14px] text-black'>End date: {setFormatDateYYYYMMDD(item.endDate)}</Text>
        </View>
      )}
      contentContainerStyle={
        {
          margin: 4,
          backgroundColor: '#FFFF'
        }
      }
    >
    </CardHorizontalUser>
  )
}

export default ExamHorizontalComponent

const styles = StyleSheet.create({})