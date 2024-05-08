import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderUser from '../../components/User/HeaderUser'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import IconOcticon from 'react-native-vector-icons/Octicons'
import IconArtDesign from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
import ButtonText from '../../components/User/ButtonText'
import { useRoute } from '@react-navigation/native'
import Profile from './Profile'
import { ScrollView } from 'react-native-gesture-handler'
import { destroyToken, getCredential, removeCredential } from '../../services/userservice/UserService'
import ButtonIcon from '../../components/User/ButtonIcon'
const userAvatar = require('../../asset/image/useravatar.png')

const Personal = ({ navigation }) => {
    const [checkButtonEditProfile, setButtonEditProfile] = useState(false);
    const [userInfor, setUserInfor] = useState({});
    const route = useRoute();
    const getUserInfor = async () => {

        try {
            const data = await getCredential();
            return data;
        } catch (error) {
            console.log('Lấy dữ liệu thất bại:', error);
        }

    }
    const handlerEditProfilePress = () => {
        setButtonEditProfile(true);
    }
    useEffect(() => {

        getUserInfor().then((value) => {
            console.log(value);
            setUserInfor(JSON.parse(value));
        })
        //setUserInfor(getUserInfor());
    }, []);

    async function logOut(event: GestureResponderEvent): void {
        await removeCredential();
        await destroyToken();
        navigation.navigate('Login');

    }
    const verifyEmail=()=>{
        navigation.navigate("VerifyCode")
    }
    return (
        <View className='h-full w-full'>
            <HeaderUser type={route.name} getDataSearch={{}} onPressSearch={{}} />
            <ScrollView className=''>
                {
                    checkButtonEditProfile ? <Profile /> : (<View>
                        <View className='flex-row m-5'>
                            <Image className='rounded-full w-[100] h-[100]' source={userAvatar}></Image>
                            <View className='pl-[5]'>
                                <Text className='font-semibold font-["Poppins"] text-2xl text-black '>{userInfor.displayName}</Text>
                                <Text className=' text-stone-700 text-sm font-normal font-["Poppins"] mb-2 '>{userInfor.emailAddress}</Text>
                                <ButtonText
                                    customContainerClassName={'w-[75] h-7'}
                                    onPress={handlerEditProfilePress}
                                    label={'Edit profile'}
                                ></ButtonText>
                            </View>
                        </View>
                        <View className='m-5'>
                            <View className='flex-row mt-3'>
                                <ButtonIcon
                                onPress={verifyEmail}
                                    icon={<View className='flex-row'>
                                        <IconMaterial name='notebook-edit-outline' size={25} color='#44403c'></IconMaterial>
                                        <Text className='pl-3 text-stone-700 text-base font-normal font-["Port Lligat Slab"] '>Verify email</Text>
                                    </View>}
                                />

                            </View>
                            <View className='flex-row mt-3'>
                                <IconOcticon name='shield-check' size={26} color='#44403c'></IconOcticon>
                                <Text className='pl-3 text-stone-700 text-base font-normal'>Privacy and term</Text>
                            </View>
                            <View className='mt-3 w-full border border-1 border-[#44403c]'></View>
                            <View className='flex-row mt-3'>
                                <IconArtDesign name='setting' size={25} color='#44403c'></IconArtDesign>
                                <Text className='pl-3 text-stone-700 text-base font-normal'>Setting</Text>
                            </View>
                            <View className='flex-row mt-3' >
                                <ButtonIcon
                                    onPress={logOut}
                                    icon={<View className='flex-row'>
                                        <IconFeather name='log-out' size={25} color='#44403c'></IconFeather>
                                        <Text className='pl-3 text-stone-700 text-base font-normal'>Log out</Text>
                                    </View>}
                                />

                            </View>
                        </View>
                    </View>)
                }
            </ScrollView>


        </View>
    )
}

export default Personal

const styles = StyleSheet.create({})