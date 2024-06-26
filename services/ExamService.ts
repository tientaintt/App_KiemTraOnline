import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import axios from '../config/axios/axios'
import { StandardizedParam } from '../utils/utils';
import { getAccessToken } from './userservice/UserService';
const getExamNext2WeekUrl = '/api/v1/multiple-choice-test/me/next-two-weeks'
const getExamAround2WeekUrl = '/api/v1/multiple-choice-test/me/two-weeks-around'
const getExamByIdUrl = '/api/v1/multiple-choice-test'
const getMyScoreUrl = '/api/v1/score/my'
const trackMyTestUrl = '/api/v1/test-tracking/my'
const createTestTrackingUrl = '/api/v1/test-tracking/my/create'
const submitMCTestUrl = '/api/v1/score/submit-test'
const getExamByDayUrl = '/api/v1/multiple-choice-test/me/specific-day'
const getAllExamByClassroomUrl='/api/v1/multiple-choice-test/classroom'
const getAllMyExamByClassroomUrl='/api/v1/multiple-choice-test/my/classroom'
export const getExamByDayService = async (startOfDay: Number,endOfDay:any, page: Int32, sortType: string, column: string, size: Int32, search: string) => {
    let queryParams = [];

    if (page) {
        queryParams.push(`page=${page}`);
    }
    if (sortType) {
        queryParams.push(`sortType=${sortType}`);
    }
    if (column) {
        queryParams.push(`column=${column}`);
    }
    if (size) {
        queryParams.push(`size=${size}`);
    }
    if (search) {
        queryParams.push(`search=${search}`);
    }
    let getExamByDayUrlParam = getExamByDayUrl + '?' + `startOfDate=${startOfDay}`;
    if(endOfDay){
        getExamByDayUrlParam = getExamByDayUrlParam +`&endOfDate=${endOfDay}`;
    }
    if (queryParams.length > 0)
        getExamByDayUrlParam = getExamByDayUrlParam + '&' + queryParams.join('&');
    
    let accessToken = await getAccessToken();
    
    return await axios.request({
        method: 'get',
        maxBodyLength: Infinity,
        url: getExamByDayUrlParam,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    })
}

export const submitMCTestService = async (value: any) => {
    let accessToken = await getAccessToken();
    return await axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: submitMCTestUrl,
        data: value,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    })
}

export const createTestTrackingService = async (MCTestId) => {
    let accessToken = await getAccessToken();
    return await axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: createTestTrackingUrl + `/ ${MCTestId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    })
}

export const trackMyTestService = async (MCTestId) => {
    let accessToken = await getAccessToken();
    return await axios.request({
        method: 'get',
        maxBodyLength: Infinity,
        url: trackMyTestUrl + `/ ${MCTestId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    })
}

export const getMyScoreService = async (MCTestId: any) => {
    let accessToken = await getAccessToken();
    console.log(getMyScoreUrl + `/${MCTestId}`)
    return await axios.request({
        method: 'get',
        maxBodyLength: Infinity,
        url: getMyScoreUrl + `/${MCTestId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    })
}

export const getExamByIdService = async (id) => {
    let accessToken = await getAccessToken();
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getExamByIdUrl + '/' + id,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    console.log(config);
    return await axios.request(config);
}

export const getExamNext2WeekService = async (page: any, sortType: any, column: any, size: any, search: any) => {
    let getExamNext2WeekUrlParam = StandardizedParam(page, sortType, column, size, search, getExamNext2WeekUrl);
    let accessToken = await getAccessToken();
    console.log(accessToken);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getExamNext2WeekUrlParam,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    console.log(config);
    return await axios.request(config);
}

export const getAllExamByClassroomService = async (page: any, sortType: any, column: any, size: any, search: any,idClassroom:String) => {
    let getAllExamByClassroomUrlParam = StandardizedParam(page, sortType, column, size, search, getAllExamByClassroomUrl+"/"+idClassroom);
    let accessToken = await getAccessToken();
    console.log(accessToken);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getAllExamByClassroomUrlParam,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    console.log(config);
    return await axios.request(config);
}

export const getAllMyExamByClassroomService = async (page: any, sortType: any, column: any, size: any, search: any,idClassroom:String) => {
    let getAllExamByClassroomUrlParam = StandardizedParam(page, sortType, column, size, search, getAllMyExamByClassroomUrl+"/"+idClassroom);
    let accessToken = await getAccessToken();
    console.log(accessToken);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getAllExamByClassroomUrlParam,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    console.log(config);
    return await axios.request(config);
}