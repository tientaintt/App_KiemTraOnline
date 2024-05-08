import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import TextInputComponent from '../../components/User/TextInput'
import Icons2 from 'react-native-vector-icons/EvilIcons'
import IconUser from 'react-native-vector-icons/FontAwesome5'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Iconse from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonText from '../../components/User/ButtonText'
import { changePasswordService, getCredential } from '../../services/userservice/UserService'
const Profile = () => {
    const [userInfor, setUserInfor] = useState({});

   
    const [dataChangePass,SetDataChangePass]=useState({
        "oldPassword": "",
        "newPassword": "",
        "confirmPass":""
    })
    const onPressChangePass=()=>{
        if(dataChangePass.confirmPass==dataChangePass.newPassword){
            // let {confirmPass,...dataChangePass}=dataChangePass;
            changePasswordService({
                "oldPassword": dataChangePass.oldPassword,
        "newPassword": dataChangePass.newPassword,
            }).then((res)=>{
                ToastAndroid.show(`Change password success !`, ToastAndroid.LONG);
            }).catch((e)=>{
                console.log(e);
            })
        }
        else{
            ToastAndroid.show(`Please check confirm password and new password !`, ToastAndroid.LONG);
        }
    }

    const getUserInfor = async () => {

        try {
            const data = await getCredential();
            return data;
        } catch (error) {
            console.log('Lấy dữ liệu thất bại:', error);
        }

    }
    useEffect(() => {

        getUserInfor().then((value) => {
            console.log(value);
            setUserInfor(JSON.parse(value));
        })
        //setUserInfor(getUserInfor());
    }, []);
    return (
        <ScrollView className=' w-full h-full'>
            <View className='m-2'>
                <Text className=' mb-3 font-semibold text-[16px] text-black'>Change Info</Text>
                <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                    customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                    getData={(value: any) => { }}
                    placeholder="Display name"
                    placeholderTextColor="#0077BA"
                    disabled={true}
                    defaultValue={userInfor.displayName}
                    icon={<View className=' pl-2 pt-1'>
                        <IconUser className='' name="user" size={16} color="#0077BA" />
                    </View>
                    }

                />
                <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                    customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                    getData={(value: any) => { }}
                    placeholder="User name"
                    placeholderTextColor="#0077BA"
                    disabled={true}
                    defaultValue={userInfor.loginName}
                    icon={
                        <View className=' pl-2 pt-1'>
                            <IconUser className='' name="user" size={16} color="#0077BA" />
                        </View>}

                />
                <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                    customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                    getData={(value: any) => { }}
                    placeholder="Email"
                    defaultValue={userInfor.emailAddress}
                    placeholderTextColor="#0077BA"
                    disabled={true}
                    icon={<View className=' pl-2 pt-1'>
                        <Iconse className='' name="email-outline" size={20} color="#0077BA" />
                    </View>}

                />
                {/* <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                    customClassNameText=' pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                    getData={(value: any) => { }}
                    placeholder="New Email"
                    placeholderTextColor="#0077BA"

                    icon={<View className=' pl-2 pt-1'>
                        <Iconse className='' name="email-outline" size={20} color="#0077BA" />
                    </View>}

                />
                <View className='w-full flex-row justify-end mt-3'>
                    <ButtonText
                        customContainerClassName='w-[90px] h-[30px]'
                        customLabelClassName='font-semibold text-[12px] text-center align-middle'
                        label={"Change"}>

                    </ButtonText>
                </View> */}
            </View>
            <View className='m-2'>
                <Text className=' mb-3 font-semibold text-[16px] text-black'>Change Password</Text>
                <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                    customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                    getData={(value: any) => {SetDataChangePass({...dataChangePass,oldPassword:value} )}}
                    placeholder="Old password"
                    placeholderTextColor="#0077BA"

                    password
                    icon={<View className=' pl-1 pt-1'>
                        <Icons2 className='' name="lock" size={25} color="#0077BA" /></View>}

                />
                <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                    customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                    getData={(value: any) => { SetDataChangePass({...dataChangePass,newPassword:value}) }}
                    placeholder="New Password"
                    placeholderTextColor="#0077BA"

                    password
                    icon={<View className=' pl-1 pt-1'>
                        <Icons2 className='' name="lock" size={25} color="#0077BA" /></View>}

                />
                <TextInputComponent customClassName=' w-full flex-row items-center justify-between h-[50px] '
                    customClassNameText='pl-10 w-full text-[#0077BA] border-2 h-[56px] border-[#0077BA] rounded-2xl'
                    getData={(value: any) => {SetDataChangePass({...dataChangePass,confirmPass:value} )}}
                    placeholder="Confirm Password"
                    placeholderTextColor="#0077BA"

                    password
                    icon={
                        <View className=' pl-1 pt-1'><Icons2 className='' name="lock" size={25} color="#0077BA" /></View>}

                />
                <View className='w-full flex-row justify-end mt-3'>
                    <ButtonText
                    onPress={onPressChangePass}
                        customContainerClassName='w-[90px] h-[30px]'
                        customLabelClassName='font-semibold text-[12px] text-center align-middle'
                        label={"Change Password"}>

                    </ButtonText>
                </View>
            </View>

        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({})