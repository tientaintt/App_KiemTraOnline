import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/Fontisto'
import Icons2 from 'react-native-vector-icons/EvilIcons'
import IconUser from 'react-native-vector-icons/FontAwesome5'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Iconse from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonIcon from '../../components/User/ButtonIcon'
import TextInputComponent from '../../components/User/TextInput'
import { validationInput } from '../../utils/utils'
import { registerService, saveCredential } from '../../services/userservice/UserService'
import { ToastAndroid } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonText from '../../components/User/ButtonText'
const logoGoogle = require('../../asset/image/google.png');
const logoFacebook = require('../../asset/image/facebook.png');
const Register = ({ navigation }) => {
    const [formData, setFormData] = useState({

        displayName: null,
        loginName: null,
        password: null,
        confirmPassword: null,
        emailAddress: null
    });
    const [errorUserName, setErrorUserName] = useState('');
    const [errorDisplayName, setErrorDisplayName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [checked, SetChecked] = useState(false);
    async function handlerSignUp() {

        try {
            var checkErrorUserName = validationInput(formData.loginName, 'username', setErrorUserName);
            var checkErrorDisplayName = validationInput(formData.displayName, 'displayname', setErrorDisplayName);
            var checkErrorEmail = validationInput(formData.emailAddress, 'email', setErrorEmail);
            var checkErrorPassword = validationInput(formData.password, 'password', setErrorPassword);
            if (checkErrorDisplayName && checkErrorEmail && checkErrorUserName && checkErrorPassword) {
                if (formData?.confirmPassword == formData.password) {
                    if (!checked) {
                        ToastAndroid.show(`Please check Agree with the privacy and term!`, ToastAndroid.TOP);
                    } else {
                        const { confirmPassword, ...data } = formData;
                        const response = await registerService(JSON.stringify(data));
                        await saveCredential(response);
                        console.log(response);
                        ToastAndroid.show(`Sign up success !`, ToastAndroid.LONG);
                    }

                } else {
                    throw Error;
                }

            }
            navigation.navigate("VerifyEmail", { email: formData.emailAddress });
        } catch (error) {
            ToastAndroid.show(`Sign up fail !`, ToastAndroid.LONG);
        }
    }



    return (
        <ScrollView className='h-full w-full bg-white pt-[5px]'>
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


            <View className='justify-center items-start w-auto m-3'>
                <View className='justify-center mb-3'>
                    <Text className='font-normal text-[#0077BA] text-[24px]'>Hello</Text>
                    <Text className='font-semibold text-[#0077BA] text-[48px]'>Sign up</Text>
                </View>
                <View className='w-full items-center justify-center' >
                    <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { setFormData((oldValue) => { return { ...oldValue, displayName: value } }) }}
                        placeholder="Display name"
                        placeholderTextColor="#0077BA"
                        error={errorDisplayName}
                        icon={<View className=' pl-2 pt-1'><IconUser className='' name="user" size={15} color="#0077BA" /></View>}

                    />
                    <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { setFormData((oldValue) => { return { ...oldValue, loginName: value } }) }}
                        placeholder="User name"
                        placeholderTextColor="#0077BA"
                        error={errorUserName}
                        icon={<View className=' pl-2 pt-1'><IconUser className='' name="user" size={16} color="#0077BA" /></View>}

                    />
                    <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { setFormData((oldValue) => { return { ...oldValue, emailAddress: value } }) }}
                        placeholder="Email"
                        placeholderTextColor="#0077BA"
                        error={errorEmail}
                        icon={<View className=' pl-1 pt-1'><Iconse className='' name="email-outline" size={20} color="#0077BA" /></View>}

                    />
                    <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { setFormData((oldValue) => { return { ...oldValue, password: value } }) }}
                        placeholder="Password"
                        placeholderTextColor="#0077BA"
                        error={errorPassword}
                        password
                        icon={<View className=' pl-2 pt-1'><Icons2 className='' name="lock" size={25} color="#0077BA" /></View>}

                    />
                    <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                        customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                        getData={(value: any) => { setFormData((oldValue) => { return { ...oldValue, confirmPassword: value } }) }}
                        placeholder="Confirm password"
                        placeholderTextColor="#0077BA"
                        error={errorPassword}
                        password
                        icon={<View className=' pl-2 pt-1'><Icons2 className='' name="lock" size={25} color="#0077BA" /></View>}

                    />
                    {/* <View className='w-full mt-8 mb-6 flex-row items-center justify-start pl-2'>
                        <IconUser className='' name="user" size={15} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Username"
                            placeholderTextColor="#0077BA"
                        >
                        </TextInput>
                    </View>
                    
                    <View className='w-full mt-8 mb-6 flex-row items-center pl-2'>
                        <IconUser className='' name="user" size={15} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Display name"
                            placeholderTextColor="#0077BA"
                        >
                        </TextInput>
                    </View>
                    <View className='w-full mt-8 mb-6 flex-row items-center pl-2'>
                        <Icons className='' name="email" size={20} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Email"
                            placeholderTextColor="#0077BA"
                        >
                        </TextInput>
                    </View>
                    <View className='w-full mt-8 mb-6 flex-row items-center pl-2'>
                        <Icons2 className='' name="lock" size={30} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Password"
                            placeholderTextColor="#0077BA"
                            secureTextEntry={true}
                            textContentType='password'
                        >
                        </TextInput>
                    </View>
                    <View className='w-full mt-8 mb-6 flex-row items-center pl-2'>
                        <Icons2 className='' name="lock" size={30} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Confirm password"
                            placeholderTextColor="#0077BA"
                            secureTextEntry={true}
                            textContentType='password'
                        >
                        </TextInput>
                    </View> */}
                    <View className='w-full flex-row justify-between p-2'>
                        <View className='flex-row items-center'>
                            <TouchableOpacity

                                className={checked == false ? ('w-4 h-4 border border-black rounded-sm')
                                    : ('w-4 h-4 border border-black rounded-sm bg-green-200')}
                                onPress={() => SetChecked(!checked)}
                            />
                            <Text className='text-[13px] ml-2 text-[#003452]'>Agree with the privacy and term</Text>
                        </View>

                    </View>


                    <TouchableOpacity
                        className='mt-4 w-full h-[56px] bg-[#0077BA] justify-center items-center rounded-[32px]'
                        onPress={handlerSignUp}
                    >
                        <Text className='text-white font-semibold text-[16px]'>Sign up</Text>
                    </TouchableOpacity>
                    <View className='flex-row my-3.5'>
                        <Text className='text-[16px] text-[#003452]'>or continue with </Text>
                    </View>
                    <View className='w-full  justify-between flex-row items-center'>
                        <TouchableOpacity
                            className=' flex-row w-2/5 h-[56px] border border-[#0077BA] bg-white justify-center items-center rounded-[20px]'

                        >
                            <Image source={logoGoogle} className='w-5 h-5 mr-3'></Image>
                            <Text className='text-black font-semibold text-[16px]'>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className='flex-row w-2/5 h-[56px] border border-[#0077BA] bg-white justify-center items-center rounded-[20px]'

                        >
                            <Image source={logoFacebook} className='h-[23px] w-[12px] mr-3'></Image>
                            <Text className='text-black font-semibold text-[16px]'>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row mt-3.5'>
                        <Text className='text-[16px] text-[#003452]'>Have an account? </Text>
                        <ButtonIcon
                        onPress={()=>{navigation.navigate("Login")}}
                        icon={<Text className='text-[16px] text-[#0077BA] font-medium'>Log in</Text>}
                        />
                        
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({})