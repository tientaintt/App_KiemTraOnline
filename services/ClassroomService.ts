import axios from '../config/axios/axios';
import { StandardizedParam } from '../utils/utils';
const getAllActiveClassroomUrl = '/api/v1/classroom';

export const getClassById= async (id:any)=>{
    let config={
        method:'get',
        maxBodyLength:Infinity,
        url:getAllActiveClassroomUrl+`/${id}`
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
