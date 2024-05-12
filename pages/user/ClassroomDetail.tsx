import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getClassById } from '../../services/ClassroomService'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExamHorizontalComponent from '../../components/User/ExamHorizontalComponent';
import { useNavigation } from '@react-navigation/native';
import { getAllExamByClassroomService, getAllMyExamByClassroomService } from '../../services/ExamService';

const ClassroomDetail = ({ id }: { id: any }) => {
    const [classData, setClass] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [listExam, SetListExam] = useState([]);
    const [page, SetPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [sort, setSort] = useState('');
    const navigation = useNavigation();
    const clickMenu = (type: any, id: any) => {
        console.log(type);
        navigation.navigate('Exam', { type: type, idExam: id });
    }
    const getClassroomById = (id: any) => {
        getClassById(id).then((res) => {
            console.log(res);
            setClass(res);
        }).catch((e) => {
            console.log(e);
        })
    }
    const getMyExamByClassroom = (idClass: String) => {
        getAllMyExamByClassroomService(page, undefined, undefined, 7, undefined, idClass).then((res) => {
            if (res.content.length != 0) {
                SetListExam((prevListData: any) => [...prevListData, ...res.content]);
                setTotalPages(res.totalPages);
            }
            setIsLoading(false);
            console.log('Data ', res.content);
        }).catch((e) => {
            console.log(e.response)
        })
    }
    function handleEnd(): void {
        if (page < totalPages)
            if (!isLoading) {
                setIsLoading(true);
                console.log(totalPages);
                SetPage((prevPage) => prevPage + 1);
                console.log("Handler end");
            }
    }
    useEffect(() => { getClassroomById(id) }, [])
    useEffect(() => {

        getMyExamByClassroom(id);

    }, [page]);
    return (
        <View className='flex-1'>
            <View className=' bg-slate-300 justify-center items-center m-auto mt-3 p-2 rounded-[12px]'>

                <Text className='font-semibold text-[#0077BA] text-[32px]'>{classData.className}</Text>
                <Text>{classData.classCode}</Text>
            </View>
            <View className='m-2'>
                <Text className='font-semibold text-[16px] text-black'>Number students :{classData.numberOfStudents}</Text>
                
            </View>
            <View className='m-2'>
                <Text className='font-semibold text-[16px] text-black'>Description</Text>
                <View>
                    <Text>{classData.description}</Text>
                </View>
            </View>
            <View className='m-2'>
                <Text className='font-semibold text-[16px] text-black'>Exam of class</Text>
            </View>
            
                <FlatList
                    className=' mx-4 bg-[#F5F5F5]'
                    ListFooterComponent={() => {
                        return isLoading && <ActivityIndicator size="large" />;
                    }}
                   
                    data={listExam}
                    key={'exam'}
                    onEndReachedThreshold={0.5}
                    onEndReached={
                        () => handleEnd()
                    }
                    keyExtractor={(item) => `exam-${item.id}`}
                    
                    ListEmptyComponent={
                        <View>
                            <Text>There are currently no exam available </Text>
                        </View>
                    }
                    contentContainerStyle={{
                        margin: 4,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                    renderItem={({ item, index }) => (
                        <ExamHorizontalComponent key={`Todays` + index} item={item} index={index} clickMenu={clickMenu} />
                    )}
                >
                </FlatList>
            
        </View>
    )
}

export default ClassroomDetail

const styles = StyleSheet.create({})