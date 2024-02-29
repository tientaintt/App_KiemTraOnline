import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icons2 from 'react-native-vector-icons/EvilIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import ButtonIcon from '../components/User/ButtonIcon'
const ResetPassword = ({navigation}) => {
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
            <View className='justify-center items-start w-full m-3'>
                <View className='w-full justify-center items-center mb-3'>
                    <Text className='font-semibold text-[#0077BA] text-[32px]'>Reset password</Text>
                </View>
                <View className='w-full items-center justify-center px-4 '>
                    <View className='w-full mt-8 mb-6 flex-row items-center pr-2'>
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
                    </View>
                    <View className='w-full px-2'>
                        <TouchableOpacity
                            className='w-full mt-4 h-[56] bg-[#0077BA] justify-center items-center rounded-[32px]'
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