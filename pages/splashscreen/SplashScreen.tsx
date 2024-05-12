import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const splashLogo = require('../../asset/image/splashlogo.png');
function SplashScreen({ navigation }): React.JSX.Element {
  useEffect(() => {
    // const timeout = setTimeout(() => navigation.navigate('Login'), 10000);
    // return () => clearTimeout(timeout);
  }, []);
  return (

    <View className="flex-1 h-auto justify-center items-center bg-white">
      <Image source={splashLogo} className='' />
      <Text className='font-bold text-[32px] text-[#041219] '>Examination Platform</Text>
      <TouchableOpacity
        className='m-7 w-[250] h-[56] bg-[#0077BA] justify-center items-center rounded-[32px]'
        onPress={() => navigation.navigate('Login')}
      >
        <Text className='text-white font-semibold text-[16px]'>Get started</Text>
      </TouchableOpacity>
    </View>

  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   baseText: {
//     fontFamily: 'Cochin',
//     fontSize: 30,
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
export default SplashScreen;
