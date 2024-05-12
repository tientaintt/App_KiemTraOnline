import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { FlatList } from 'react-native-gesture-handler'

import { useRoute } from '@react-navigation/native'
import { getAllMyClassroomService } from '../../services/ClassroomService'
import CardHorizontalUser from '../../components/User/CardHorizontalUser'
import SearchBar from '../../components/User/SearchBar'
import StatisticComponent from '../../components/StatisticComponent'
import { getExamByDayService } from '../../services/ExamService'

import ExamHorizontalComponent from '../../components/User/ExamHorizontalComponent'
import { getAllMyScoreService } from '../../services/ScoreService'
import ScoreHorizontalComponent from '../../components/User/ScoreHorizontalComponent'
import ClassHorizontalComponent from '../../components/User/ClassHorizontalComponent'

const ShowResult = ({ navigation, type, getActionPress }) => {

  const [listData, SetListData] = useState<any>([]);

  const [page, SetPage] = useState(0);
  const [totalElement, setTotalElement] = useState(0);
  const [numberOfElement, setNumberOfElement] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [search, SetSearch] = useState('');
  const [sort, setSort] = useState('');

  const renderComponent = (type, item, pressAction, index): React.JSX.Element => {
    switch (type) {
      case 'TodayExam':
        return <ExamHorizontalComponent item={item} clickMenu={clickMenu} index={index} />
      case 'UpcomingExam':
        return <ExamHorizontalComponent item={item} clickMenu={clickMenu} index={index} />
      case "Score":
        return <ScoreHorizontalComponent item={item} scorePress={pressAction} />
      default:
        return <ClassHorizontalComponent item={item} classPress={pressAction} />
    }
  }

  const scorePress = (id: any) => {
    getActionPress(id);
  }

  const pressAction = (id: any) => {

    switch (type) {
      case "Score":
        return scorePress(id);
      default:
        return classPress(id)
    }
  }

  const clickMenu = (type: any, id: any) => {
    console.log(type);
    navigation.navigate('Exam', { type: type, idExam: id });
  }

  const classPress = (id: any) => {

    navigation.navigate('Class', { type: "ClassroomDetail", idClass: id })
  }

  const getAllData = () => {
    console.log(type);
    switch (type) {
      case "Class":
        getAllMyClass();
        break;
      case "TodayExam":
        console.log(' getAllExamByToday');
        getAllExamByToday();
        break;
      case "UpcomingExam":
        getAllExamUpcoming();
        break;
      case "Score":
        getAllScore();
        break;
    }

  }
  const getAllScore = () => {
    getAllMyScoreService(page, sort, '', 10, search, 0, 0).then((res) => {
      console.log(res);
      if (res.content.length != 0) {
        SetListData((prevListData: any) => [...prevListData, ...res.content]);
        setTotalPages(res.totalPages);
        setTotalElement(res.totalElements);
      }
      setIsLoading(false);
      
    }).catch((e) => {
      console.log(e);
    })
  }
  const getAllExamByToday = () => {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    getExamByDayService(date.getTime(), date.getTime() + 24 * 3600 * 1000, page, sort, '', 8, search).then((res) => {
      console.log(res);
      if (res.content.length != 0) {
        SetListData((prevListData: any) => [...prevListData, ...res.content]);
        setTotalPages(res.totalPages);
        setTotalElement(res.totalElements);
      }
      setIsLoading(false);
      
    }).catch((e) => {
      console.log(e);
    })
  }

  const getAllExamUpcoming = () => {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    getExamByDayService(date.getTime() + 24 * 3600 * 1000, null, page, sort, '', 10, search).then((res) => {

      if (res.content.length != 0) {
        SetListData((prevListData: any) => [...prevListData, ...res.content]);
        setTotalPages(res.totalPages);
        setTotalElement(res.totalElements);
      }

      setIsLoading(false);
    }).catch((e) => {
      console.log(e);
    })
  }
  const getAllMyClass = () => {
    try {

      getAllMyClassroomService(page, sort, undefined, 10, search).then((res: any) => {
        console.log("Page ", page);
        console.log(sort);
        if (res.content.length != 0) {
          SetListData((prevListData: any) => [...prevListData, ...res.content]);
          setTotalPages(res.totalPages);

          setTotalElement(res.totalElements);

        }
        setIsLoading(false);
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
        console.log(page);
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
          renderComponent(type, item, pressAction, index)

        )}
      >
      </FlatList>

    </View>
  )
}

export default ShowResult


const styles = StyleSheet.create({})
