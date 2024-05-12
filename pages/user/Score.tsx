import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderUser from '../../components/User/HeaderUser'
import { useNavigation, useRoute } from '@react-navigation/native';
import ShowResult from './ShowResult';
import ScoreDetail from './ScoreDetail';

const Score = () => {
  const route = useRoute();
  const param = route.params;
  const navigation = useNavigation();
  const [idScore,setIdScore]=useState('');
  useEffect(()=>{
    if(param?.idExam){
      setIdScore(param?.idExam);
    }
  },[])
  return (
    <View className='flex-1'>
      <HeaderUser type={route.name} getDataSearch={{}} />
      {idScore ? (<ScoreDetail idScore={idScore} />) : (<ShowResult navigation={navigation} type={route.name} getActionPress={setIdScore}/>)}

    </View>
  )
}

export default Score

const styles = StyleSheet.create({})