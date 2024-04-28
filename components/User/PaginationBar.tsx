import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonText from './ButtonText'

const PaginationBar = ({ totalPage, currentPage }) => {
    return (
        <View className='flex-row ' style={{}}>
            <ButtonText
                label="Previous"
                customContainerStyle={{ backgroundColor: '#84b777', height: 'auto', margin: 2, paddingVertical: 2, width: 80 }}
            >
            </ButtonText>
            <ButtonText
                label="Next"
                customContainerStyle={{ backgroundColor: '#84b777', height: 'auto', margin: 2, paddingVertical: 2, width: 80 }}
            >

            </ButtonText>
        </View>
    )
}

export default PaginationBar

const styles = StyleSheet.create({})