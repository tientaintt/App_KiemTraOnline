/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useRef } from 'react';
import SplashScreen from './pages/splashscreen/SplashScreen';
import Home from './pages/user/home/Home';
import Login from './pages/login/Login';
import { AppProvider } from '@realm/react';
import { CredentialModel, RealmProvider } from './schemas/CredentialSchema';
import Register from './pages/register/Register';
import SendEmail from './pages/forgotPassword/SendEmail';
import VerifyCode from './pages/forgotPassword/VerifyCode';
import ResetPassword from './pages/forgotPassword/ResetPassword';
import TabNavigate from './navigation/TabNavigate';
import ShowResult from './pages/user/ShowResult';
import VerifyEmail from './pages/user/VerifyEmail';
import Profile from './pages/user/Profile';
import DoExam from './pages/user/DoExam';
import Exam from './pages/user/Exam';
import PushNotification from "react-native-push-notification";
import NavigationService from './services/NavigationService';
const Stack = createStackNavigator();
const APP_ID = '65016b9c23df855ef7f3aee6';
function App(): React.JSX.Element {
  const navigationRef=useRef();
  useEffect(() => {
    
    // Lưu trữ navigation vào navigationService khi nó được sẵn có
    NavigationService.setNavigationRef(navigationRef.current);
  }, []);
  // const navigation = useNavigation();
  // useEffect(() => {
  //   PushNotification.localNotification({
  //     channelId: '1',
  //     ticker: "AAA",
  //     message: "My Notification Message",
  //   })
   
  // })
  return (
    <AppProvider id={'s'}>
      <RealmProvider schema={[CredentialModel]}>
        <NavigationContainer  ref={navigationRef}>
          <Stack.Navigator >
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TabNavigate" component={TabNavigate} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="SendEmail" component={SendEmail} options={{ headerShown: false }} />
            <Stack.Screen name="VerifyCode" component={VerifyCode} options={{ headerShown: false }} />
            <Stack.Screen name="Exam" component={Exam} options={{ headerShown: false }} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      </RealmProvider>
    </AppProvider >
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
