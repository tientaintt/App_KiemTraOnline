import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Fontisto'
import Icons2 from 'react-native-vector-icons/EvilIcons'
import IconUser from 'react-native-vector-icons/FontAwesome5'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import ButtonIcon from '../components/User/ButtonIcon'
const Register = ({ navigation }) => {
    return (
        <View className='h-full w-full bg-white pt-[5px]'>
            <View className='pl-3'>
                <ButtonIcon
                    icon={
                        <IconIonicons name='chevron-back-circle-outline' size={30}
                        ></IconIonicons>
                    }
                    onPress={()=>navigation.goBack()}
                >
                </ButtonIcon>
            </View>


            <View className='justify-center items-start w-auto m-3'>
                <View className='justify-center mb-3'>
                    <Text className='font-normal text-[#0077BA] text-[24px]'>Hello</Text>
                    <Text className='font-semibold text-[#0077BA] text-[48px]'>Sign up</Text>
                </View>
                <View className='w-full items-center justify-center'>
                    <View className='w-full mt-8 mb-6 flex-row items-center justify-start pl-2'>
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
                    </View>
                    <View className='w-full flex-row justify-between p-2'>
                        <View className='flex-row items-center'>
                            <TouchableOpacity
                                className='w-4 h-4 border border-black rounded-sm'
                            />
                            <Text className='text-[13px] ml-2 text-[#003452]'>Agree with the privacy and term</Text>
                        </View>

                    </View>


                    <TouchableOpacity
                        className='mt-4 w-full h-[56px] bg-[#0077BA] justify-center items-center rounded-[32px]'

                    >
                        <Text className='text-white font-semibold text-[16px]'>Sign up</Text>
                    </TouchableOpacity>
                    <View className='flex-row my-3.5'>
                        <Text className='text-[16px] text-[#003452]'>or continue with </Text>
                    </View>
                    <View className='w-full  justify-between flex-row items-center'>
                        <TouchableOpacity
                            className=' w-2/5 h-[56px] border border-[#0077BA] bg-white justify-center items-center rounded-[20px]'

                        >
                            <Text className='text-black font-semibold text-[16px]'>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className=' w-2/5 h-[56px] border border-[#0077BA] bg-white justify-center items-center rounded-[20px]'

                        >
                            <Text className='text-black font-semibold text-[16px]'>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row mt-3.5'>
                        <Text className='text-[16px] text-[#003452]'>Have an account? </Text>
                        <Text className='text-[16px] text-[#0077BA] font-medium'>Log in</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})