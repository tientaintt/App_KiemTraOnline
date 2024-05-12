import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const QuestionForm = ({ questionForm, chooseAnswer, showScore }) => {
    const [checked, SetChecked] = useState(null);
    useEffect(() => {
        console.log(showScore)
        if (showScore)
            SetChecked(questionForm.submittedAnswer)
    }, []);
    const chooseAnswerOn = (answer, idQuestion) => {
        console.log("Click")
        SetChecked(answer);
        var formAnswer = {
            "questionId": idQuestion,
            "answer": answer,
        }
        chooseAnswer(formAnswer);
    }
    return (
        <View className='m-3'>
            <Text className='font-bold text-[15px]'>{questionForm.content}</Text>
            <View>

                <View className='flex-row items-center'>
                    <TouchableOpacity
                        disabled={showScore ? true : false}
                        className={` items-center justify-center m-2 w-3 h-3 border border-[#b9a2a2] rounded-full ${checked == questionForm.firstAnswer && 'border-[#0077BA]'}`}
                        onPress={() => { chooseAnswerOn(questionForm.firstAnswer, questionForm.id) }}
                    >
                        <View className={`w-2 h-2 rounded-full ${checked == questionForm.firstAnswer && 'bg-[#0077BA]'}`}></View>
                    </TouchableOpacity>
                    <Text className={ showScore==true ? (checked == questionForm.firstAnswer ? questionForm.correctAnswer == questionForm.firstAnswer ? ('font-sans text-[15px] text-green-500') : ('font-sans text-[15px] text-red-400') : (questionForm.correctAnswer == questionForm.firstAnswer ?'font-sans text-[15px] text-green-500':'font-sans text-[15px]')):('font-sans text-[15px]')}>{questionForm.firstAnswer}</Text>
                </View>
                <View className='flex-row items-center'>
                    <TouchableOpacity
                        disabled={showScore ? true : false}
                        className={` items-center justify-center m-2 w-3 h-3 border border-[#b9a2a2] rounded-full ${checked == questionForm.secondAnswer && 'border-[#0077BA]'}`}
                        onPress={() => { chooseAnswerOn(questionForm.secondAnswer, questionForm.id) }}
                    >
                        <View className={`w-2 h-2 rounded-full ${checked == questionForm.secondAnswer && 'bg-[#0077BA]'}`}></View>
                    </TouchableOpacity>
                    <Text className={ showScore==true ? (checked == questionForm.secondAnswer ? questionForm.correctAnswer == questionForm.secondAnswer ? ('font-sans text-[15px] text-green-500') : ('font-sans text-[15px] text-red-400') : (questionForm.correctAnswer == questionForm.secondAnswer ?'font-sans text-[15px] text-green-500':'font-sans text-[15px]')):('font-sans text-[15px]')}>{questionForm.secondAnswer}</Text>
                </View>
                <View className='flex-row items-center'>
                    <TouchableOpacity
                        disabled={showScore ? true : false}
                        className={` items-center justify-center m-2 w-3 h-3 border border-[#b9a2a2] rounded-full ${checked == questionForm.thirdAnswer && 'border-[#0077BA]'}`}
                        onPress={() => { chooseAnswerOn(questionForm.thirdAnswer, questionForm.id) }}
                    >
                        <View className={`w-2 h-2 rounded-full ${checked == questionForm.thirdAnswer && 'bg-[#0077BA]'}`}></View>
                    </TouchableOpacity>
                    <Text className={ showScore==true ? (checked == questionForm.thirdAnswer ? questionForm.correctAnswer == questionForm.thirdAnswer ? ('font-sans text-[15px] text-green-500') : ('font-sans text-[15px] text-red-400') : (questionForm.correctAnswer == questionForm.thirdAnswer ?'font-sans text-[15px] text-green-500':'font-sans text-[15px]')):('font-sans text-[15px]')}>{questionForm.thirdAnswer}</Text>
                </View>
                <View className='flex-row items-center'>
                    <TouchableOpacity
                        disabled={showScore ? true : false}
                        className={` items-center justify-center m-2 w-3 h-3 border border-[#b9a2a2] rounded-full ${checked == questionForm.fourthAnswer && 'border-[#0077BA]'}`}
                        onPress={() => { chooseAnswerOn(questionForm.fourthAnswer, questionForm.id) }}
                    >
                        <View className={`w-2 h-2 rounded-full ${checked == questionForm.fourthAnswer && 'bg-[#0077BA]'}`}></View>
                    </TouchableOpacity>
                    <Text className={ showScore==true ? (checked == questionForm.fourthAnswer ? questionForm.correctAnswer == questionForm.fourthAnswer ? ('font-sans text-[15px] text-green-500') : ('font-sans text-[15px] text-red-400') : (questionForm.correctAnswer == questionForm.fourthAnswer ?'font-sans text-[15px] text-green-500':'font-sans text-[15px]')):('font-sans text-[15px]')}>{questionForm.fourthAnswer}</Text>
                </View>
            </View>

        </View >
    )
}

export default QuestionForm

const styles = StyleSheet.create({})