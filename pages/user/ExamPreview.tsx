import { StyleSheet, Text, View } from 'react-native'
import React, { useDebugValue, useEffect, useState } from 'react'
import { getExamByIdService } from '../../services/ExamService'
import { useNavigation, useRoute } from '@react-navigation/native';
import { equalDayCurrentDay, setFormatDateYYYYMMDD } from '../../utils/utils';
import ButtonText from '../../components/User/ButtonText';

const ExamPreview = () => {
  const navigation=useNavigation();
  const route = useRoute();
  const param = route.params;
  const [exam, SetExam] = useState({});
  const getExamById = () => {
    getExamByIdService(param?.idExam).then(res => {
      console.log(res);
      SetExam(res);
    }).catch(e => {
      console.log(e)
    })
  }
  useEffect(() => {
    getExamById();
  }, [])
  return (
    <View>
      <View className=' bg-slate-300 justify-center items-center m-auto p-2 rounded-[12px]'>

        <Text className='font-semibold text-[#0077BA] text-[32px]'>{exam.testName}</Text>
        <Text className='font-semibold text-[#d74753] text-[20px]'>Target score: {exam.targetScore}</Text>
      </View>
      <View className='m-2 flex-row justify-end '>
        <Text className='font-semibold text-[14px] text-black text-right '>Start date: </Text>
        <Text>{setFormatDateYYYYMMDD(exam.startDate)}</Text>
      </View>
      <View className='m-2 flex-row justify-end '>
        <Text className='font-semibold text-[14px] text-black text-right '>End date: </Text>
        <Text>{setFormatDateYYYYMMDD(exam.endDate)}</Text>
      </View>

      <View className='m-2'>
        <Text className='font-semibold text-[16px] text-black'>Description</Text>
        <View>
          <Text>{exam.description}</Text>
        </View>
      </View>
      <View className='w-full flex-row justify-end mt-3'>
        <ButtonText
          customContainerClassName={equalDayCurrentDay(exam.startDate)? (exam.isSubmitted ? ('w-[90px] h-[30px]'):('w-[90px] h-[30px]') ):"hidden"}
          customLabelClassName='font-semibold text-[12px] text-center align-middle'
          label={equalDayCurrentDay(exam.startDate)? (exam.isSubmitted ? ("View score"):("Do exam") ):""}
          onPress={()=>{ 
            equalDayCurrentDay(exam.startDate)? (exam.isSubmitted ? (navigation.navigate("Score",{ idExam: param?.idExam })):(navigation.navigate("Exam",{type:"DoExam", idExam: param?.idExam })) ):""
            }}
          >
          
        </ButtonText>
      </View>
    </View>
  )
}

export default ExamPreview

const styles = StyleSheet.create({})