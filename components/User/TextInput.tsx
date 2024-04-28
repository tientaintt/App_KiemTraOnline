import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

const TextInputComponent = ({ customClassName, customClassNameText, placeholder, placeholderTextColor, getData, error, icon, password, disabled,defaultValue }: any) => {
    const [checkShow, SetEyeShow] = useState(!password);
    const [checkFocus, SetFocus]=useState(false);
    useEffect(()=>{
        console.log("default ", defaultValue);
        if(defaultValue)
            getData(defaultValue);
    },[defaultValue]);
    function handlerShowInOutPassword() {
        SetEyeShow(!checkShow);
    }

    return (
        <View className={`w-full items-center justify-center mb-4 `}>
            <View className={customClassName} >
                <View className={`ml-1 ${!checkFocus&&'opacity-70'}`}>
                    {icon}
                </View>
                <TextInput className={`${!checkFocus&&'opacity-70'} top-0 right-0 left-0 bottom-0 m-0 justify-center items-center absolute ${customClassNameText}`}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    onFocus={()=>{SetFocus(true)}}
                    onBlur={()=>{SetFocus(false)}}
                    secureTextEntry={password ? (!checkShow && true) : false}
                    onChangeText={(value: any) => { getData(value) }}
                    editable={disabled ? false : true}
                    defaultValue={defaultValue}
                ></TextInput>

                {
                    password ? (<TouchableOpacity className='pr-2'
                        onPress={handlerShowInOutPassword}
                    >
                        <IconFontAwesome name='eye-slash' size={20} color='#0077BA'></IconFontAwesome>
                    </TouchableOpacity >

                    ) : ''
                }
            </View>
            <View>
                {
                    error ? <Text className='text-red-600 mt-3 bg-yellow-200'>{error}</Text> : ''
                }
            </View>

        </View>


    )
}

export default TextInputComponent

const styles = StyleSheet.create({})