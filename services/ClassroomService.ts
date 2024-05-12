import axios from '../config/axios/axios';
import { StandardizedParam } from '../utils/utils';
import { getAccessToken } from './userservice/UserService';
const getAllActiveClassroomUrl = '/api/v1/classroom';
const getAllMyClassUrl = '/api/v1/classroom/me'

export const getClassById = async (id: any) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getAllActiveClassroomUrl + `/${id}`
    }
    return await axios.request(config);
}

export const getAllActiveClassroomService = async (page: any, sortType: any, column: any, size: any, search: any) => {
    let getAllActiveClassUrlParam = StandardizedParam(page, sortType, column, size, search, getAllActiveClassroomUrl);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getAllActiveClassUrlParam,

    };
    console.log(config);
    return await axios.request(config);
}

export const getAllMyClassroomService = async (page: any, sortType: any, column: any, size: any, search: any) => {
    let getAllActiveClassUrlParam = StandardizedParam(page, sortType, column, size, search, getAllMyClassUrl);
    let accessToken = await getAccessToken();
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getAllActiveClassUrlParam,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    };
    console.log(config);
    return await axios.request(config);
}
