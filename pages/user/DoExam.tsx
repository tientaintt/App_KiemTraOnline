import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import HeaderUser from '../../components/User/HeaderUser'
import { useNavigation, useRoute } from '@react-navigation/native'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PaginationBar from '../../components/User/PaginationBar'
import QuestionForm from '../../components/User/QuestionForm'
import { createTestTrackingService, getExamByIdService, getMyScoreService, submitMCTestService, trackMyTestService } from '../../services/ExamService'
import ButtonText from '../../components/User/ButtonText'
import { secondsDiff } from '../../utils/utils'
const DoExam = () => {

    let navigation = useNavigation();
    const route = useRoute();
    const param = route.params;
    const [exam, setExam] = useState({});
    const [seconds, setSeconds] = useState(10000);
    const [listquestion, setQuestions] = useState([]);
    const [listAnswer, setListAnswer] = useState([]);
    const [answer, setAnswer] = useState({});
    const getExamById = (id) => {
        getExamByIdService(id).then((res) => {
            console.log(res);
            setExam(res);

            setQuestions(res.questions);
            setSeconds(res.testingTime * 60);
        }).catch((e => {
            console.log(e);
        }))

    }
    const submitTest = () => {
        submitMCTestService({
            "multipleChoiceTestId": param.idExam,
            submittedAnswers: listAnswer,
        }).then((res)=>{

            navigation.navigate('Score');
        }).catch((e)=>{
            console.log(e);
        })
    }
    const standardizedTimer = (second) => {
        // if (second < 3600){
        //     let minutes = Math.floor(second / 60);
        //     let secondls: any = second % 60;

        //     if (secondls < 10) {
        //         secondls = '0' + secondls;
        //     }

        //     return minutes + ':' + secondls;
        // }else{
        //     let hours =Math.floor(second / 3600);
        //     let minutes = Math.floor((second -hours*3600)/ 60);
        //     let secondls: any = second % 60;

        //     if (secondls < 10) {
        //         secondls = '0' + secondls;
        //     }

        //     return hours + ':'+ minutes + ':' + secondls;
        // }
        const hours = Math.floor(second / 3600);
        const minutes = Math.floor((second % 3600) / 60);
        const seconds = second % 60;

        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        if (hours > 0) {
            const formattedHours = hours.toString().padStart(2, '0');
            return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        } else {
            return `${formattedMinutes}:${formattedSeconds}`;
        }
    }
    useEffect(() => {
        getMyScoreService(param?.idExam).then((res) => {

        }).catch((e) => {
            console.log('4', e);
            getExamByIdService(param?.idExam).then((res) => {
                console.log(res);
                setExam(res);

                setQuestions(res.questions);
                setSeconds(res.testingTime * 60);

            }).catch((err: any) => {
                console.error('1', err);
            })

            trackMyTestService(param?.idExam)
                .then((res) => {
                    if (!Object.keys(res).length) {
                        createTestTrackingService(param?.idExam)
                            .then((res2) => {
                                setSeconds(secondsDiff((new Date(res2.dueTime)), (new Date())))
                            })
                            .catch((err) => {
                                console.error('2', err);
                            })
                    } else {
                        setSeconds(secondsDiff((new Date(res.dueTime)), (new Date())))
                    }
                })
                .catch((err) => {
                    console.error('3', err)
                })
        })
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);



    useEffect(() => {

        if (seconds <= 0) {
            console.log('Đếm ngược đã kết thúc');
            navigation.navigate('TabNavigate');
        }
    }, [seconds]);
    useEffect(() => {
        setListAnswer((prev) => {

            const updatedList = prev.map((item) => {
                if (item.questionId === answer.questionId) {
                    return answer;
                }
                return item;
            });

            if (updatedList.find((item) => item.questionId === answer.questionId)) {

                return updatedList;
            } else {

                return [...prev, answer];
            }
        });
    }, [answer])
    return (
        <View className=''>

            <View className='w-full items-center my-5'>
                <Text className='font-bold text-[#0077BA] text-[16px]'>
                    Exam name
                </Text>
            </View>
            <View className=' flex-row items-center justify-center'>
                <IconMaterialCommunityIcons name='clock-time-four-outline' size={16} color={'#cab9b9'} />
                <Text className='mx-1 text-[#cab9b9]'>Time remaining: {standardizedTimer(seconds)}</Text>
            </View>
            <View>
                <View className='bg-[#c7c7cf] rounded-xl m-3'>
                    <FlatList
                        data={listquestion}
                        key={'class'}
                        keyExtractor={(item) => `class-${item.id}`}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={
                            <View>
                                <Text>Error get question!!! </Text>
                            </View>
                        }
                        contentContainerStyle={{
                            margin: 4,



                        }}
                        renderItem={({ item, index }) => {
                            return (<QuestionForm chooseAnswer={setAnswer} questionForm={item} />)
                        }}
                    >

                    </FlatList>
                    {/* {listquestion.map((item, index) => {
                        return (<QuestionForm questionForm={item} />)

                    })
                    } */}

                    {/* <PaginationBar /> */}
                </View>
                <View className=' items-end mx-3 '>
                    <ButtonText
                        customContainerStyle={{ width: 100 }}
                        label='Submit'
                        onPress={() =>submitTest()}
                    />

                </View>
            </View>
        </View>
    )
}

export default DoExam

const styles = StyleSheet.create({})