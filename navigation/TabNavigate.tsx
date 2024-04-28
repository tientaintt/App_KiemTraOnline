import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/user/home/Home';
import IconsHome from 'react-native-vector-icons/Octicons'
import IconsScore from 'react-native-vector-icons/EvilIcons'
import IconsNotifi from 'react-native-vector-icons/MaterialCommunityIcons'
import IconUser from 'react-native-vector-icons/FontAwesome5'
import Personal from '../pages/user/Personal';
import Profile from '../pages/user/Profile';
import ClassroomDetail from '../pages/user/ClassroomDetail';
import Class from '../pages/user/Class';
const Tab = createBottomTabNavigator();
const TabNavigate = (props: any) => {
    return <Tab.Navigator  screenOptions={
        ({ route }) => ({
            unmountOnBlur:true,
            headerShown: false,
            tabBarStyle: {
                paddingTop: 6,
                paddingLeft: 16,
                paddingRight: 16,
                height: 70
            },
            tabBarLabelStyle: {
                fontWeight: 300,

                fontSize: 14,

                paddingBottom: 6
            },
           
        })
    }>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ focused }) => {
                return <IconsHome name='home' size={30} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconsHome>
            }
        }
        } />
        <Tab.Screen name="Score" component={Home} options={{
            tabBarIcon: ({ focused }) => {
                return <IconsScore name='trophy' size={40} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconsScore>
            }
        }
        } />
        <Tab.Screen name="Notification" component={Home} options={{
            tabBarIcon: ({ focused }) => {
                return <IconsNotifi name='bell-ring-outline' size={30} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconsNotifi>
            }
        }
        } />
        <Tab.Screen name="Class" component={Class} options={{
            tabBarIcon: ({ focused }) => {
                return <IconsNotifi name='google-classroom' size={30} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconsNotifi>
            }
        }
        } initialParams={{type:"Class"}}/>
        <Tab.Screen name="Personal" component={Personal} options={{
            tabBarIcon: ({ focused }) => {
                return <IconUser name='user' size={30} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconUser>
            }
        }

        } />
        {/* <Tab.Screen name="Profile" component={Profile} options={{
           

            tabBarIcon: () => null, // Ẩn biểu tượng ở đây
            tabBarLabel: '',
            

        }} /> */}
    </Tab.Navigator>
}

export default TabNavigate

const styles = StyleSheet.create({})