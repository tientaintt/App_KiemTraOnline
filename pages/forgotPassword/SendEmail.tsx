import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/Fontisto'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import ButtonIcon from '../../components/User/ButtonIcon'
import { validationInput } from '../../utils/utils'
import Iconse from 'react-native-vector-icons/MaterialCommunityIcons'
import TextInputComponent from '../../components/User/TextInput'

const SendEmail = ({ navigation }) => {
    const [emailAddress, setEmailAdress] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const handlerInputText = (value: any) => {
        setEmailAdress(value);
    }
    const handlerPressVerify=()=>{
        var checkErrorEmail = validationInput(emailAddress, 'email', setErrorEmail);
        if(checkErrorEmail){
            navigation.navigate('VerifyCode', { email: emailAddress })
        }else{
                
        }
    }
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
                   <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { handlerInputText(value) }}
                        placeholder="Email"
                        placeholderTextColor="#0077BA"
                        error={errorEmail}
                        icon={<View className=' pl-1 pt-1'><Iconse className='' name="email-outline" size={20} color="#0077BA" /></View>}

                    />
                    <TouchableOpacity
                        className='mt-4 w-full h-[56px] bg-[#0077BA] justify-center items-center rounded-[32px]'
                        onPress={() => { handlerPressVerify() }}
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