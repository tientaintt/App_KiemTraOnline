import { Int32 } from "react-native/Libraries/Types/CodegenTypes"
import { StandardizedParam } from "../utils/utils"
import axios from '../config/axios/axios'
import { getAccessToken } from "./userservice/UserService"

const getAllMyScoreUrl='/api/v1/score/my';


export const getAllMyScoreService=async(page: any, sortType: any, column: any, size: any, search: any, dateFrom:Int32, dateTo:Int32)=>{
    let getAllMyScoreParam=StandardizedParam(page, sortType, column, size, search,getAllMyScoreUrl);
    let accessToken = await getAccessToken();
    console.log(accessToken);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getAllMyScoreParam,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    return await axios.request(config);
}

export const getMyScoreService=async(id:String)=>{

    let accessToken = await getAccessToken();
    console.log(accessToken);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: getAllMyScoreUrl+"/"+id,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    return await axios.request(config);
}