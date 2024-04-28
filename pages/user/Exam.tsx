import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import HeaderUser from '../../components/User/HeaderUser';
import DoExam from './DoExam';
import ExamPreview from './ExamPreview';
import SearchExam from './SearchExam';

const Exam = () => {
    const route = useRoute();
    const param = route.params;
  return (
    <View className='flex-1'>
      <HeaderUser type={route.name} getDataSearch={{}} />
      {param?.type == 'DoExam' ? (<DoExam></DoExam>) :(
        param?.type == 'PreviewExam' ? (<ExamPreview></ExamPreview>) :(<SearchExam type={param?.type}></SearchExam>)
      ) }
    </View>
  )
}

export default Exam

const styles = StyleSheet.create({})