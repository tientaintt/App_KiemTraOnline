import { Button, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { getRoles, loginInService, saveCredential } from '../../services/userservice/UserService';
import Icons from 'react-native-vector-icons/Fontisto'
import Icons2 from 'react-native-vector-icons/EvilIcons'
import { ROLE_ADMIN } from '../../utils/Constant';
import { useRealm } from '@realm/react';
import { CredentialModel } from '../../schemas/CredentialSchema';
import ButtonIcon from '../components/User/ButtonIcon';


const Login = ({ navigation }) => {
    const [userName, SetUserName] = useState('');
    const [password, SetPassword] = useState('');
    const [checked, SetChecked] = useState(false);
    const realm = useRealm();
    const addCredential = (username: string, password: string) => {
        realm.write(() => {
            console.log("AAA");
            const collection = realm.create<CredentialModel>('Credential', {
                username: username,
                password: password,
            });
            console.log("sss" + collection.username);
        });
    };
    useEffect(() => { }, [])
    const LogInPress = async () => {

        try {
            // const response = await loginInService(JSON.stringify({
            //     'loginName': userName,
            //     'password': password
            // }));
            // console.log(response.data); // In dữ liệu phản hồi từ yêu cầu
            // // Tiếp tục xử lý sau khi đăng nhập thành công
            // saveCredential(response.data)
            // // let roles = getRoles();
            // console.log(userName)
            // // Xử lý kết quả thành công
            ToastAndroid.show(`Log in success !`, ToastAndroid.LONG);
            if (checked) {
                addCredential(userName, password);
            }
            navigation.navigate('Home');
        } catch (error) {
            // Xử lý lỗi
            console.error(error);
            ToastAndroid.show(`Log in fail !`, ToastAndroid.LONG);
            // Hiển thị thông báo lỗi cho người dùng
        }

    }
    return (
        <View className='h-full w-full bg-white pt-[150px]'>
            <View>
               
            </View>
            <View className='justify-center items-start w-auto m-3'>
                <View className='justify-center mb-9'>
                    <Text className='font-normal text-[#0077BA] text-[24px]'>Welcome back</Text>
                    <Text className='font-semibold text-[#0077BA] text-[48px] '>Log In</Text>
                </View>
                <View className='w-full items-center justify-center'>
                    <View className='w-full m-4 flex-row items-center pl-2'>
                        <Icons className='' name="email" size={20} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Email"
                            placeholderTextColor="#0077BA"
                            onChangeText={(value) => { SetUserName(value) }} >
                        </TextInput>
                    </View>
                    <View className='w-full mt-8 mb-6 flex-row items-center pl-2'>
                        <Icons2 className='' name="lock" size={30} color="#0077BA" />
                        <TextInput className='pl-10 w-full absolute text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                            placeholder="Password"
                            placeholderTextColor="#0077BA"
                            secureTextEntry={true}
                            textContentType='password'
                            onChangeText={(value) => { SetPassword(value) }} >
                        </TextInput>
                    </View>

    
                    <View className='w-full flex-row justify-between p-2'>
                        <View className='flex-row items-center'>
                            <TouchableOpacity
                                className={checked == false ? ('w-4 h-4 border border-black rounded-sm')
                                    : ('w-4 h-4 border border-black rounded-sm bg-green-200')}
                                onPress={() => SetChecked(!checked)}
                            />
                            <Text className='text-[13px] ml-2 text-[#003452]'>Remember me</Text>
                        </View>
                        <View>
                            <Text className='text-[13px] text-[#003452]' onPress={()=>navigation.navigate('SendEmail')}>Forgot password?</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        className='mt-6 w-full h-[56px] bg-[#0077BA] justify-center items-center rounded-[32px]'
                        onPress={LogInPress}
                    >
                        <Text className='text-white font-semibold text-[16px]'>Log in</Text>
                    </TouchableOpacity>
                    <View className='flex-row mt-3.5'>
                        <Text className='text-[16px] text-[#003452]'>Don't have an account? </Text>
                        <Text className='text-[16px] text-[#0077BA] font-medium' onPress={()=>{navigation.navigate('Register')}}>Create now</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})