/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './pages/splashscreen/SplashScreen';
import Home from './pages/user/home/Home';
import Login from './pages/login/Login';
import { AppProvider, RealmProvider } from '@realm/react';
import { CredentialModel} from './schemas/CredentialSchema';
const Stack = createStackNavigator();
const APP_ID = '65016b9c23df855ef7f3aee6';
function App(): React.JSX.Element {
  return (
    <AppProvider id={APP_ID}>

      <RealmProvider schema={[CredentialModel]}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
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
