import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { FlatList } from 'react-native-gesture-handler'

import { useRoute } from '@react-navigation/native'
import { getAllActiveClassroomService } from '../../services/ClassroomService'
import CardHorizontalUser from '../../components/User/CardHorizontalUser'
import SearchBar from '../../components/User/SearchBar'
import StatisticComponent from '../../components/StatisticComponent'
import { getExamByDayService } from '../../services/ExamService'

const ShowResult = ({ navigation, type }) => {
  
  const [listData, SetListData] = useState<any>([]);

  const [page, SetPage] = useState(0);
  const [totalElement, setTotalElement] = useState(0);
  const [numberOfElement, setNumberOfElement] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [search, SetSearch] = useState('');
  const [sort, setSort] = useState('');

  const classPress = (id: any) => {
   
    navigation.navigate('Class', { type: "ClassroomDetail", idClass: id })
  }

  const getAllData = () => {
    console.log(type);
    switch (type) {
      case "Class":
        getAllActiveClass();
        break;
      case "TodayExam":
        getAllExamByToday();
        break;
      case "UpcomingExam":
        break;
    }
    setIsLoading(false);
  }

  const getAllExamByToday = () => {
    let date = new Date();
    getExamByDayService(date.getTime(), page, sort, '', 6, search).then((res) => {
      console.log(res);
      if (res.content.length != 0) {
        SetListData((prevListData: any) => [...prevListData, ...res.content]);
        setTotalPages(res.totalPages);
        setTotalElement(res.totalElements);
      }
     
      console.log('Data ', res.content);
    }).catch((e) => {
      console.log(e);
    })
  }

  const getAllActiveClass = () => {
    try {

      getAllActiveClassroomService(page, sort, undefined, 6, search).then((res: any) => {
        console.log("Page ", page);
        console.log(sort);
        if (res.content.length != 0) {
          SetListData((prevListData: any) => [...prevListData, ...res.content]);
          setTotalPages(res.totalPages);

          setTotalElement(res.totalElements);

        }
        
        console.log('Data ', res.content);
      });

    }
    catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {

    SetPage(0);
    SetListData([]);

  }, [search]);

  useEffect(() => {

    SetPage(0);
    SetListData([]);

  }, [sort]);

  useEffect(() => {

    getAllData();

  }, [page]);
  useEffect(() => { setNumberOfElement(listData.length) }, [listData])

  // useEffect(() => {
  //   if (pageSearch != 0)
  //     handlerSearch();


  // }, [pageSearch])

  function handleEnd(): void {
    if (page < totalPages)
      if (!isLoading) {
        setIsLoading(true);
        console.log(totalPages)

        // if (search) {
        //   console.log(pageSearch);

        //   console.log("check search ", search);
        //   SetPageSearch((prevPageSearch) => prevPageSearch + 1);
        //   handlerSearch();
        //   console.log(pageSearch);
        // } else {
        //   SetPage((prevPage) => prevPage + 1);
        //   getAllData();
        // }

        SetPage((prevPage) => prevPage + 1);
       
        console.log("Handler end")


      }
  }

  return (
    <View className='flex-1'>

      <SearchBar setDataSearch={SetSearch} setSort={setSort}></SearchBar>
      <View className='mx-6'><Text className='font-bold text-center text-base'>{`List data: ${numberOfElement}/${totalElement}`}</Text></View>
      <FlatList

        ListFooterComponent={() => {
          return isLoading && <ActivityIndicator size="large" />;
        }}
        ListEmptyComponent={
          <View>
            <Text>No data. Please check again</Text>
          </View>
        }
        className=' mx-5 rounded-sm bg-[#F5F5F5]'
        data={listData}
        key={'Id'}
        onEndReachedThreshold={0.5}
        onEndReached={
          () => handleEnd()
        }
        keyExtractor={(item) => `ID-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          margin: 4,
          justifyContent: 'center',
          alignItems: 'center',

        }}
        renderItem={({ item, index }) => (

          <CardHorizontalUser
            onPress={() => classPress(item.id)}
            disabledMenu={true}
            content={
              <View>

                <Text className='font-medium text-[18px] text-[#0077BA]'>{index}</Text>
                <Text className='font-light text-[14px] text-black'>Classname: {item.className}</Text>
              </View>
            }
            contentContainerStyle={
              {
                margin: 6,
                backgroundColor: '#FFFF'
              }
            }
          >
          </CardHorizontalUser>
        )}
      >
      </FlatList>

    </View>
  )
}

export default ShowResult

const styles = StyleSheet.create({})