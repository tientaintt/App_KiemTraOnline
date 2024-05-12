import { StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icons2 from 'react-native-vector-icons/EvilIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import ButtonIcon from '../../components/User/ButtonIcon'
import { useRoute } from '@react-navigation/native'
import TextInputComponent from '../../components/User/TextInput'
import { resetPasswordService } from '../../services/userservice/UserService'
import { validationInput } from '../../utils/utils'

const ResetPassword = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const route = useRoute();
    const { code, emailAddress } = route.params;
    const handlerResetPassword = async () => {
        try {
            console.log({
                code: code,
                emailAddress: emailAddress,
                password: password
            })
            var checkErrorPassword = validationInput(password, 'password', setErrorPassword);
            var checkErrorConfirmPassword = validationInput(confirmPassword, 'password', setErrorConfirmPassword);
            if (checkErrorConfirmPassword && checkErrorPassword)
                if (confirmPassword == password) {
                    const res = await resetPasswordService({
                        code: code,
                        emailAddress: emailAddress,
                        password: password
                    });
                    console.log(res);
                    navigation.navigate('Login');
                    ToastAndroid.show('Reset password succeed', ToastAndroid.LONG);
                }else{
                    ToastAndroid.show('Password and Confirm Password do not match', ToastAndroid.LONG);

                }

        } catch (error) {
            console.log(error)
            ToastAndroid.show('Reset password failed', ToastAndroid.LONG);
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
            <View className='justify-center items-start w-full m-3'>
                <View className='w-full justify-center items-center mb-3'>
                    <Text className='font-semibold text-[#0077BA] text-[32px]'>Reset password</Text>
                </View>
                <View className='w-full items-center justify-center pr-4 '>
                    {/* <View className='w-full mt-8 mb-6 flex-row items-center pr-2'>
                        <Icons2 className='' name="lock" size={30} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Password"
                            placeholderTextColor="#0077BA"
                            secureTextEntry={true}
                            textContentType='password'
                        >
                        </TextInput>
                    </View>
                    <View className='w-full mt-8 mb-6 flex-row items-center pr-2 '>
                        <Icons2 className='' name="lock" size={30} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Confirm password"
                            placeholderTextColor="#0077BA"
                            secureTextEntry={true}
                            textContentType='password'
                        >
                        </TextInput>
                    </View> */}
                    <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { setPassword(value) }}
                        placeholder="Password"
                        placeholderTextColor="#0077BA"
                        password
                        error={errorPassword}
                        icon={<View className=' pl-2 pt-1'><Icons2 className='' name="lock" size={25} color="#0077BA" /></View>}

                    />
                    <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { setConfirmPassword(value) }}
                        placeholder="Confirm password"
                        placeholderTextColor="#0077BA"
                        error={errorConfirmPassword}
                        password
                        icon={<View className=' pl-2 pt-1'><Icons2 className='' name="lock" size={25} color="#0077BA" /></View>}

                    />
                    <View className='w-full px-2'>
                        <TouchableOpacity
                            className='w-full mt-4 h-[56] bg-[#0077BA] justify-center items-center rounded-[32px]'
                            onPress={handlerResetPassword}
                        >
                            <Text className=' text-white font-semibold text-[16px]'>Reset password</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({})