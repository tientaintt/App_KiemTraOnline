import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonText from '../../components/User/ButtonText'
import { useRoute } from '@react-navigation/native';

const VerifyEmail = ({navigation}) => {
    const route=useRoute();
    const {email}=route.params;
    return (
        <View className='h-full w-full justify-center items-center bg-white'>
            <View className='h-[150px] justify-center mx-2 mb-3  border-[3px] border-[#0077BA] rounded-xl' >
                <Text className=' px-5 pt-5 font-semibold text-[#0077BA] text-[32px] text-center'>Do you want verify email ?</Text>
                <View className='flex-row justify-between items-center m-7'>
                    <ButtonText
                        customContainerClassName={'w-[70px] '}
                        onPress={()=>{navigation.navigate('VerifyCode')}}
                        customLabelClassName={'text-[20px]'}
                        label={'Yes'}
                    ></ButtonText>
                    <ButtonText
                        onPress={()=>{navigation.navigate('TabNavigate')}}
                        customContainerClassName={'w-[90px]'}
                        customLabelClassName={'text-[20px]'}
                        customContainerStyle={
                            {
                                backgroundColor: 'red'
                            }
                        }
                        label={'Not now'}
                    ></ButtonText>
                </View>


            </View>

        </View >
    )
}

export default VerifyEmail

const styles = StyleSheet.create({})