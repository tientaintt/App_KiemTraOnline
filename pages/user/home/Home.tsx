import React from 'react';
import { Image, SafeAreaView, ScrollViewBase, StyleSheet, Text, View,  } from 'react-native';
import HeaderUser from '../../components/User/HeaderUser';
import { FlatList,ScrollView } from 'react-native-gesture-handler';
import CardVerticalUser from '../../components/User/CardVerticalUser';
import CardHorizontalUser from '../../components/User/CardHorizontalUser';
import BottomBar from '../../components/User/BottomBar';

const logo = require('../../../asset/image/classroom_avatar.png');
function Home(): React.JSX.Element {
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
      <HeaderUser></HeaderUser>
      <ScrollView className=''>
        <View>
          <View className='flex-row justify-between items-center mx-4'>
            <Text className=' text-black font-semibold text-[16px] '>
              Exam Categories
            </Text>
            <Text className='font-light text-[12px] text-[#0077BA]'>
              See more
            </Text>
          </View>
          <FlatList
            className=' mx-4 bg-[#F5F5F5]'
            horizontal
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
              <CardVerticalUser
                contentContainerStyle={
                  {
                    margin: 4,
                    backgroundColor: '#EBEEFF'
                  }
                }
                contentTextStyle={
                  {
                    height: 14,
                    color: '#0077BA'
                  }
                }
                content={
                  item
                }
              >
              </CardVerticalUser>
            )}
          >
          </FlatList>
        </View>
        <View>
          <View className='flex-row justify-between items-center mx-4'>
            <Text className=' text-black font-semibold text-[16px] '>
              Today Exam
            </Text>
            <Text className='font-light text-[12px] text-[#0077BA]'>
              See more
            </Text>
          </View>
          <FlatList
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
                    backgroundColor:'#FFFF'
                  }
                }
              >
              </CardHorizontalUser>
            )}
          >
          </FlatList>
        </View>



        <View className=''>
          <View className='flex-row justify-between items-center mx-4'>
            <Text className=' text-black font-semibold text-[16px] '>
              Intent Exam
            </Text>
            <Text className='font-light text-[12px] text-[#0077BA]'>
              See more
            </Text>
          </View>
          <FlatList
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
                    backgroundColor:'#FFFF'
                  }
                }
              >
              </CardHorizontalUser>
            )}
          >
          </FlatList>
        </View>
      </ScrollView>
      <BottomBar>

      </BottomBar>
    </View>
  );
}

export default Home;
