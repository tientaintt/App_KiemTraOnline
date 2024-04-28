import { StyleSheet, View } from 'react-native'
import React from 'react'
import IconFeather from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-gesture-handler'
import { MenuView } from '@react-native-menu/menu'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Text } from 'react-native'

const SearchBar = ({ setDataSearch, setSort }: { setDataSearch: Function, setSort: Function }) => {
    return (
        <View className='flex-row mx-4 my-2 items-center w-full'>
            <View className=' flex-row items-center w-3/4 mr-1'>
                <TextInput placeholder="Search..."
                    placeholderTextColor="#0077BA"
                    onChangeText={(value) => {
                        console.log("Gia tri search: ", value)

                        setDataSearch(value);
                    }}
                    className='w-full bg-white px-3 rounded-[32px]  '>
                </TextInput>
                <View className='absolute right-3'>

                    <IconFeather name='search' size={25} color="black" />
                </View>
            </View>
            <MenuView
                onPressAction={({ nativeEvent }) => {
                    setSort(nativeEvent.event);
                }}
                title='Sort by'
                actions={[

                    {
                        id: 'asc',
                        title: "Ascending",
                        titleColor: '#2367A2',



                    },
                    {
                        id: 'desc',
                        title: "Decreasing",
                        titleColor: '#2367A2',


                    },
                ]}>
                <View className='flex-row'>
                    <Text className='font-semibold text-[16px] text-[#0077BA]'>Sort by</Text>
                    <IconMaterialIcons name='arrow-drop-down' size={20} color={'#0077BA'} />
                </View>
            </MenuView>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})