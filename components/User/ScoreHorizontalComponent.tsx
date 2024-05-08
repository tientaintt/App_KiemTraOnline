import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardHorizontalUser from './CardHorizontalUser'
import { setFormatDateYYYYMMDD } from '../../utils/utils'

const ScoreHorizontalComponent = ({ item, scorePress }) => {
    return (
        <CardHorizontalUser
            onPress={() => scorePress(item.testId)}
            disabledMenu={true}
            content={
                <View>

                    <Text className='font-medium text-[18px] text-[#0077BA]'>Test name: {item.testName}</Text>
                    <Text className='font-light text-[14px] text-black'>Submitted date: {setFormatDateYYYYMMDD(item.submittedDate)}</Text>
                    <Text className='font-light text-[14px] text-black'>Score: {item.totalScore}/{item.targetScore}</Text>
                </View>
            }
            contentContainerStyle={
                {
                    margin: 6,
                    backgroundColor: '#FFFF'
                }
            }
        >
        </CardHorizontalUser>
    )
}

export default ScoreHorizontalComponent

const styles = StyleSheet.create({})