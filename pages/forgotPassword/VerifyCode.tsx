import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import OTPTextView from 'react-native-otp-textinput'
import ButtonIcon from '../components/User/ButtonIcon'
import IconIonicons from 'react-native-vector-icons/Ionicons'


const VerifyCode = ({ navigation }) => {
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
                    <Text className='font-semibold text-[#0077BA] text-[32px]'>Verify Code</Text>
                </View>
                <View className='w-full items-center justify-center px-4'>
                    <View className='w-full  mb-6 flex-row items-center pl-2'>
                        <OTPTextView
                            inputCount={6}
                            containerStyle={{
                                marginTop: 20,
                            }}
                            tintColor={'#0077BA'}
                            offTintColor={'transparent'}
                            textInputStyle={{
                                borderWidth: 1,
                                borderBottomWidth: 1,
                                borderColor: "#0077BA",
                                width: 50,
                                height: 50,
                                borderRadius: 12,
                                backgroundColor: '#F5F5F5',

                            }}>

                        </OTPTextView>
                    </View>
                    <View className='w-full flex-row justify-between items-center' >
                        <View className='flex-row'>
                            <Text className='font-light text-[16]'>Code will expire is </Text>
                            <Text className='text-red-500 font-light text-[16]'>59s</Text>
                        </View>
                        <Text className='font-light text-[16] text-[#0077BA]'>Resend code</Text>
                    </View>
                    <TouchableOpacity
                        className='mt-4 w-full h-[56px] bg-[#0077BA] justify-center items-center rounded-[32px]'
                        onPress={() => { navigation.navigate('ResetPassword') }}
                    >
                        <Text className='text-white font-semibold text-[16px]'>Verify code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default VerifyCode

const styles = StyleSheet.create({})