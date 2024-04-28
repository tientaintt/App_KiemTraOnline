import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollViewBase, SectionList, StyleSheet, Text, View, } from 'react-native';

import { FlatList, ScrollView } from 'react-native-gesture-handler';


import { getAllActiveClassroomService } from '../../../services/ClassroomService';
import { index } from 'realm';
import { getExamAround2WeekService, getExamNext2WeekService } from '../../../services/ExamService';
import HeaderUser from '../../../components/User/HeaderUser';
import CardVerticalUser from '../../../components/User/CardVerticalUser';
import CardHorizontalUser from '../../../components/User/CardHorizontalUser';
import { convertMillisecondsToTime, isCurrentDay, setFormatDateYYYYMMDD } from '../../../utils/utils';

const logo = require('../../../asset/image/classroom_avatar.png');
function Home({ navigation }): React.JSX.Element {
  const [listClass, SetListClass] = useState([]);
  const [listExam, SetListExam] = useState([]);
  const [listExamToday, setListExamToday] = useState([]);
  const [listExamUpcoming, setListExamUpcoming] = useState([]);
  const [dataSearch, setDataSearch] = useState('');
  useEffect(() => {
    getExamNext2Week();
    getAllActiveClass();
  }, []);
  useEffect(() => {
    listExam.map((item: any, index) => {
      if (isCurrentDay(item.startDate)) {

        setListExamToday((prev) => [...prev, item])
      }
      else
        setListExamUpcoming((prev) => [...prev, item])

      return 1;
    })
  }, [listExam]);

  const clickMenu = (type: any, id: any) => {
    console.log(type);
    navigation.navigate('Exam', { type: type, idExam: id });
  }

  const classPress = (id: any) => {

    navigation.navigate('Class', { type: "ClassroomDetail", idClass: id })
  }

  const seeMorePress = (type: any) => {
    switch (type) {
      case 'Class':
        navigation.navigate('Class', { type:type });
        break;
      default:
        break;

    }
  }

  const getExamNext2Week = async () => {
    try {
      const res = await getExamNext2WeekService(0, undefined, undefined, 12, undefined);

      if (res.length != 0) {
        SetListExam(res);
      }
      console.log(res);
    } catch (error) {
      console.log("SSSS");
      console.log(error.response);
    }
  }

  const getAllActiveClass = async () => {
    try {
      const res = await getAllActiveClassroomService(0, undefined, undefined, 6, undefined);
      //console.log(res);
      if (res.content.length != 0) {
        SetListClass(res.content);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const data = {
    exams: [
      {
        id: 1,
        category: "Math",
        name: "KTRA15P",
        timeComplete: new Date('12-9-2023'),
        score: 100
      },
      {
        id: 2,
        category: "English",
        name: "KTRA15P",
        timeComplete: new Date('12-9-2023'),
        score: 100
      }, {
        id: 3,
        category: "Physic",
        name: "KTRA15P",
        timeComplete: new Date('12-9-2023'),
        score: 100
      }, {
        id: 4,
        category: "Biogt",
        name: "KTRA15P",
        timeComplete: new Date('12-9-2023'),
        score: 100
      },
      {
        id: 5,
        category: "Biogt",
        name: "KTRA15P",
        timeComplete: new Date('12-9-2023'),
        score: 100
      },
      {
        id: 6,
        category: "Biogt",
        name: "KTRA15P",
        timeComplete: new Date('12-9-2023'),
        score: 100
      },
    ],

  }
  return (
    <View className='flex-1'>
      <HeaderUser getDataSearch={setDataSearch} onPressSearch={() => { navigation.navigate('Exam', {dataSearch:dataSearch})}}></HeaderUser>
      <ScrollView className=''>

        <View className='flex-row justify-between items-center mx-4 my-[2]'>
          <Text className=' text-black font-semibold text-[16px] '>
            Classroom
          </Text>
          <Text onPress={() => seeMorePress('Class')} className='font-light text-[12px] text-[#0077BA]'>
            See more
          </Text>
        </View>
    
        <FlatList
          className=' mx-4 bg-[#F5F5F5]'
          horizontal
          data={listClass}
          key={'class'}
          keyExtractor={(item) => `class-${item.id}`}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <View>
              <Text>There are currently no class available </Text>
            </View>
          }
          contentContainerStyle={{
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',

          }}
          renderItem={({ item, index }) => (
            <CardVerticalUser
              onPress={() => { classPress(item.id) }}

              contentContainerStyle={
                {
                  margin: 4,
                  backgroundColor: '#EBEEFF',
                  borderRadius: 10
                }
              }
              contentTextStyle={
                {
                  height: 15,
                  color: '#0077BA'

                }
              }
              content={
                <Text className='text-center h-[15] text-[#0077BA]' >{item.className}</Text>
              }
            >
            </CardVerticalUser>
          )}
        >
        </FlatList>
        {/* </View>
        <View> */}
        <View className='flex-row justify-between items-center mx-4 my-[2]'>
          <Text className=' text-black font-semibold text-[16px] '>
            Today Exam
          </Text>
          <Text onPress={() => { navigation.navigate('Exam', {type:'TodayExam'}) }} className='font-light text-[12px] text-[#0077BA]'>
            See more
          </Text>
        </View>
        {/* <FlatList
            className=' mx-4 rounded-sm bg-[#F5F5F5]'
            data={data.exams}
            key={'courses'}
            keyExtractor={(item) => `course-${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              margin: 4,
              justifyContent: 'center',
              alignItems: 'center',

            }}
            renderItem={({ item, index }) => (
              <CardHorizontalUser
                content={item}
                contentContainerStyle={
                  {
                    margin: 4,
                    backgroundColor: '#FFFF'
                  }
                }
              >
              </CardHorizontalUser>
            )}
          >
          </FlatList> */}
        <ScrollView
          className=' mx-4 rounded-sm bg-[#F5F5F5]'

        >
          {
            listExamToday.length != 0 ? (
              listExamToday.map((item: any, index) => {


                return ((<CardHorizontalUser
                  idFunction1='PreviewExam'
                  labelFunction1='Review exam'
                  idFunction2='DoExam'
                  labelFunction2='Do exam'
                  clickMenu={(data) => clickMenu(data, item.id)}
                  key={`Todays` + index}
                  content={(
                    <View key={`Today` + index}>
                      <Text key={`Todayn` + index} className='font-medium text-[18px] text-[#0077BA]'>{item.testName}</Text>
                      <Text key={`Todaya` + index} className='font-light text-[14px] text-black'>Start date: {setFormatDateYYYYMMDD(item.startDate)}</Text>
                      <Text key={`Todaym` + index} className='font-light text-[14px] text-black'>End date: {setFormatDateYYYYMMDD(item.endDate)}</Text>
                    </View>
                  )}
                  contentContainerStyle={
                    {
                      margin: 4,
                      backgroundColor: '#FFFF'
                    }
                  }
                >
                </CardHorizontalUser>))


              })) : (<View>
                <Text>There are currently no tests available during this time</Text>
              </View>)

          }

        </ScrollView>
        {/* </View>



        <View className=''> */}
        <View className='flex-row justify-between items-center mx-4 my-[2]'>
          <Text className=' text-black font-semibold text-[16px] '>
            Upcoming Exam
          </Text>
          <Text onPress={() => { navigation.navigate('Exam', {type:'UpcomingExam'}) }} className='font-light text-[12px] text-[#0077BA]'>
            See more
          </Text>
        </View>
        {/* <FlatList
            className=' mx-4 rounded-sm bg-[#F5F5F5]'
            data={data.exams}
            key={'courses'}
            keyExtractor={(item) => `course-${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              margin: 4,
              justifyContent: 'center',
              alignItems: 'center',

            }}
            renderItem={({ item, index }) => (
              <CardHorizontalUser
                content={item}
                contentContainerStyle={
                  {
                    margin: 4,
                    backgroundColor: '#FFFF'
                  }
                }
              >
              </CardHorizontalUser>
            )}
          >
          </FlatList> */}
        <ScrollView
          className=' mx-4 rounded-sm bg-[#F5F5F5]'>
          {
            listExamUpcoming.length != 0 ?
              listExamUpcoming.map((item: any, index) => {


                return (<CardHorizontalUser
                  idFunction1='PreviewExam'
                  labelFunction1='Review exam'
                  idFunction2='DoExam'
                  labelFunction2='Do exam'

                  key={'Upcoming' + index}
                  content={(
                    <View >
                      <Text className='font-medium text-[18px] text-[#0077BA]'>{item.testName}</Text>
                      <Text className='font-light text-[14px] text-black'>Start date: {setFormatDateYYYYMMDD(item.startDate)}</Text>
                      <Text className='font-light text-[14px] text-black'>End date: {setFormatDateYYYYMMDD(item.endDate)}</Text>
                    </View>
                  )}
                  contentContainerStyle={
                    {
                      margin: 4,
                      backgroundColor: '#FFFF'
                    }
                  }
                >
                </CardHorizontalUser>)

              }) : (<View>
                <Text>There are currently no tests available during this time</Text>
              </View>)
          }

        </ScrollView>
        {/* </View> */}
      </ScrollView>

    </View>
  );
}

export default Home;
