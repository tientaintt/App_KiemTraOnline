import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderUser from '../../components/User/HeaderUser'
import ShowResult from './ShowResult'
import { useRoute } from '@react-navigation/native'
import ClassroomDetail from './ClassroomDetail'
import { ScrollView } from 'react-native-gesture-handler'
import StatisticComponent from '../../components/StatisticComponent'


const Class = ({ navigation }) => {
    const route = useRoute();
    const param = route.params;
    console.log(route);
    return (
        <View className='flex-1'>
            <HeaderUser type={route.name} getDataSearch={{}} />

            {param?.type == 'ClassroomDetail' ? (<ClassroomDetail id={param?.idClass}></ClassroomDetail>) :
                (<ShowResult type={param ? (param.type) : (route.name)} navigation={navigation} ></ShowResult>
                )}

        </View>
    )
}

export default Class

const styles = StyleSheet.create({})