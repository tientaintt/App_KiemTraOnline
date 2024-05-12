import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
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
import NavigationService from '../services/NavigationService';
import { getCredential } from '../services/userservice/UserService';
import { useNavigation } from '@react-navigation/native';
import Score from '../pages/user/Score';
import PushNotification from "react-native-push-notification";
import BackgroundTimer from "react-native-background-timer"
import { getAllMyClassroomService } from '../services/ClassroomService';
import { getExamByDayService } from '../services/ExamService';
import { index } from 'realm';
import { setFormatDateYYYYMMDD } from '../utils/utils';
const Tab = createBottomTabNavigator();
const TabNavigate = (props: any) => {
    const [listData, SetListData] = useState([]);
    const navigation = useNavigation();
    // const navigationRef = useRef();
    // useEffect(() => {

    //     // Lưu trữ navigation vào navigationService khi nó được sẵn có
    //     NavigationService.setNavigationRef(navigationRef.current);
    // }, []);
    // const navigation = useNavigation();
    const getAllExamToday = () => {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        getExamByDayService(date.getTime(), date.getTime() + 24 * 3600 * 1000, 0, '', '', 100, '').then((res) => {

            if (res.content.length != 0) {
                SetListData(res.content);

            }
            console.log(res);

        }).catch((e) => {
            console.log(e);
        })
    }

    // useEffect(() => {

    //     getCredential()?.then((user) => {
    //         console.log("USER", user);
    //         if (user == null) {
    //             navigation.goBack();
    //         } else {
    //             getAllExamToday();

    //         }

    //     }).catch((e) => console.log(e))


    // }, [])
    // const checkTimeRemaining = (item: any, interval) => {
    //     const fiveMinutes = 5 * 60 * 1000;
    //     const currentTime = new Date().getTime(); // Thời gian hiện tại
    //     const timeRemaining = item.startDate - currentTime;
    //     console.log("Time: ", timeRemaining);
    //     console.log(setFormatDateYYYYMMDD(item.startDate));
    //     if (timeRemaining > 0 && timeRemaining <= fiveMinutes) {
    //         console.log(item);
    //         console.log('Còn 5 phút');
    //         // Thực hiện hành động khi còn 5 phút

    //         PushNotification.localNotification({
    //             channelId: '1',
    //             ticker: "AAA",
    //             title: 'Incoming Examination',
    //             message: "Your examination is about to begin",
    //             largeIcon: "image",
    //             data: {
    //                 idExam: item.id,
    //             }
    //         })
    //         clearInterval(interval);

    //     }
    // };
    // const checkTimeExamRemaining = (interval) => {
    //     listData.forEach((item) => {
    //         checkTimeRemaining(item, interval);
    //     })
    // }
    // useEffect(() => {

    //     // 5 phút expressed in milliseconds


    //     console.log("Mount")
    //     // Kiểm tra ban đầu

        
    //     // Thiết lập việc kiểm tra định kỳ sau mỗi 1 phút
    //     const interval:any = setInterval(() => checkTimeExamRemaining(interval), 60000);
    //     checkTimeExamRemaining(interval);
    //     console.log("Mounts");
    //     // Xóa interval khi component unmount
    //     return () => {
    //         console.log("Unmount")
    //         clearInterval(interval);
    //     };
    // });

    return <Tab.Navigator screenOptions={
        ({ route }) => ({
            unmountOnBlur: true,
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
        <Tab.Screen name="Score" component={Score} options={{
            tabBarIcon: ({ focused }) => {
                return <IconsScore name='trophy' size={40} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconsScore>
            }
        }
        } />
        {/* <Tab.Screen name="Notification" component={Home} options={{
            tabBarIcon: ({ focused }) => {
                return <IconsNotifi name='bell-ring-outline' size={30} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconsNotifi>
            }
        }
        } /> */}
        <Tab.Screen name="Class" component={Class} options={{
            tabBarIcon: ({ focused }) => {
                return <IconsNotifi name='google-classroom' size={30} color={focused ? '#0077BA' : '#D0D0D0'}>
                </IconsNotifi>
            }
        }
        } initialParams={{ type: "Class" }} />
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