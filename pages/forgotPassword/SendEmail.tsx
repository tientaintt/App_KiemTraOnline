import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Fontisto'
import IconIonicons from 'react-native-vector-icons/Ionicons'

import ButtonIcon from '../components/User/ButtonIcon'
const SendEmail = ({ navigation }) => {
    return (
        <View className='h-full w-full bg-white pt-[5px]'>
            <View className='pl-3'>
                <ButtonIcon
                    icon={
                        <IconIonicons name='chevron-back-circle-outline' size={30}
                        ></IconIonicons>
                    }
                    onPress={() => navigation.goBack()}
                >
                </ButtonIcon>
            </View>
            <View className='justify-center items-start w-full'>
                <View className=' mb-3 w-full justify-center items-center'>
                    <Text className='font-semibold text-[#0077BA] text-[32px]'>Send Email</Text>
                </View>
                <View className='w-full items-center justify-center px-4'>
                    <View className='w-full mt-8 mb-6 flex-row items-center pl-2'>
                        <Icons className='' name="email" size={20} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Email"
                            placeholderTextColor="#0077BA"
                        >
                        </TextInput>
                    </View>
                    <TouchableOpacity
                        className='mt-4 w-full h-[56px] bg-[#0077BA] justify-center items-center rounded-[32px]'
                        onPress={() => { navigation.navigate('VerifyCode') }}
                    >
                        <Text className='text-white font-semibold text-[16px]'>Send verify code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default SendEmail

const styles = StyleSheet.create({})