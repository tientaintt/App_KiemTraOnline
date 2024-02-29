import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonText from './ButtonText'
import ButtonIcon from './ButtonIcon'
import IconsHome from 'react-native-vector-icons/Octicons'
import IconsScore from 'react-native-vector-icons/EvilIcons'
import IconsNotifi from 'react-native-vector-icons/MaterialCommunityIcons'
import IconUser from 'react-native-vector-icons/FontAwesome5'
const BottomBar = () => {
    return (
        <View className='w-full flex-row items-center justify-between px-4 h-[70] bg-white' style={
            {
                width: '100%',

            }
        }>
            <ButtonIcon
                containerStyle={{
                    margin: 2,
                }}
                icon={
                    <View className='flex items-center'>

                        <IconsHome name='home' size={30} color='#0077BA'>
                        </IconsHome>
                        <Text className='font-light text-[#0077BA] text-[10]'>Home</Text>
                    </View>
                }
            >
            </ButtonIcon>
            <ButtonIcon
                icon={
                    <View className='flex items-center'>
                        <IconsScore name='trophy' size={40} color='#D0D0D0'>
                        </IconsScore>
                        <Text className='font-light text-[#D0D0D0] text-[10]'>Score</Text>
                    </View>
                }
            >
            </ButtonIcon>
            <ButtonIcon
                icon={
                    <View className='flex items-center'>
                        <IconsNotifi name='bell-ring-outline' size={30} color='#D0D0D0'>
                        </IconsNotifi>
                        <Text className='font-light text-[#D0D0D0] text-[10]'>Notification</Text>
                    </View>
                }
            >
            </ButtonIcon>
            <ButtonIcon
                icon={
                    <View className='flex items-center'>
                        <IconsNotifi name='google-classroom' size={30} color='#D0D0D0'>
                        </IconsNotifi>
                        <Text className='font-light text-[#D0D0D0] text-[10]'>Classroom</Text>
                    </View>
                }
            >
            </ButtonIcon>
            <ButtonIcon
                icon={
                    <View className='flex items-center'>
                        <IconUser name='user' size={30} color='#D0D0D0'>
                        </IconUser>
                        <Text className='font-light text-[#D0D0D0] text-[10]'>Personal</Text>
                    </View>
                }
            >
            </ButtonIcon>
        </View>
    )
}

export default BottomBar

