import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import QuestionForm from '../../components/User/QuestionForm'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getMyScoreService } from '../../services/ExamService'
import { setFormatDateYYYYMMDD } from '../../utils/utils'

const ScoreDetail = ({ idScore }) => {

    const [exam, setExam] = useState({});
    const [score, setScore] = useState({});
    const [listquestion, setQuestions] = useState([]);
    const getMyScore = (idScore) => {
        console.log(idScore);
        getMyScoreService(idScore).then(res => {
            setScore(res)
            console.log(score)
            setExam(res.multipleChoiceTest);
            setQuestions(res.submittedQuestions);
        }).catch(e => {
            console.log(e);
        })
    }
    useEffect(() => { getMyScore(idScore) }, []);
    return (
        <View className='flex-1'>

            <View className='w-full items-center my-2'>
                <Text className='font-bold text-[#435763] text-[20px]'>
                    {exam.testName}
                </Text>
            </View>
            <View className=' flex-row items-center justify-center'>
                <IconMaterialCommunityIcons name='clock-time-four-outline' size={16} color={'#cab9b9'} />
                <Text className='mx-1 text-[#cab9b9]'>Summit date: {setFormatDateYYYYMMDD(score.submittedDate)}</Text>
            </View>
            <View className=' flex-row items-center justify-center'>
                <Text className='my-1 text-[#cab9b9]'>Score:</Text>
                <Text className='text-red-500'> {score.totalScore}</Text>
            </View>
            <View className='bg-[#d6d9db] rounded-xl m-3 flex-1'>
                <FlatList
                    data={listquestion}
                    key={'score'}
                    keyExtractor={(item) => `score-${item.id}`}
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
                        return (<QuestionForm chooseAnswer={{}} questionForm={item} showScore={true} />)
                    }}
                >

                </FlatList>
                {/* {listquestion.map((item, index) => {
                return (<QuestionForm questionForm={item} />)

            })
            } */}

                {/* <PaginationBar /> */}
            </View>

        </View>

    )
}

export default ScoreDetail

const styles = StyleSheet.create({})