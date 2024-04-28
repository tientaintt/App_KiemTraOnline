import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getClassById } from '../../services/ClassroomService'

const ClassroomDetail = ({ id }: { id: any }) => {
    const [classData, setClass] = useState({});

    const getClassroomById = (id: any) => {
        getClassById(id).then((res) => {
            console.log(res);
            setClass(res);
        }).catch((e) => {
            console.log(e);
        })
    }
    useEffect(() => { getClassroomById(id) }, [])
    return (
        <View>
            <View className=' bg-slate-300 justify-center items-center m-auto mt-3 p-2 rounded-[12px]'>

                <Text className='font-semibold text-[#0077BA] text-[32px]'>{classData.className}</Text>
                <Text>{classData.classCode}</Text>
            </View>
            <View className='m-2'>
                <Text className='font-semibold text-[16px] text-black'>Description</Text>
                <View>
                    <Text>{classData.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default ClassroomDetail

const styles = StyleSheet.create({})