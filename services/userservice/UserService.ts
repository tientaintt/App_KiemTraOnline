import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from '../../config/axios/axios'
import { AxiosResponse } from "axios";
const loginInUrl = '/login';
export const loginInService =  async(body: string) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: loginInUrl,
        data: body
    };
    console.log(config)
    return await axios.request(config);
}

export const getRefreshToken = async () => {
    try {
        const value = await AsyncStorage.getItem('refreshToken');
        if (value !== null) {
            return value;
        } else {
            console.log('Không tìm thấy giá trị.');
        }
    } catch (error) {
        console.log('Truy xuất dữ liệu thất bại:', error);
    }
}

export const saveToken = async (accessToken: string, refreshToken: string, roles: string) => {
    try {
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('refreshToken', refreshToken);
        if (roles != null)
            await AsyncStorage.setItem('roles', roles);
        console.log('Dữ liệu đã được lưu trữ thành công.');
    } catch (error) {
        console.log('Lưu trữ dữ liệu thất bại:', error);
    }


}
export const saveCredential = async (userInfor: string) => {

    try {
        await AsyncStorage.setItem('userInfor', JSON.stringify(userInfor));

        console.log('Dữ liệu đã được lưu trữ thành công.');
    } catch (error) {
        console.log('Lưu trữ dữ liệu thất bại:', error);
    }

    saveToken(userInfor.accessToken, userInfor.refreshToken, JSON.stringify(userInfor.roles));
}

export const destroyToken = () => {

    try {
        AsyncStorage.removeItem('accessToken');
        AsyncStorage.removeItem('refreshToken');
        AsyncStorage.removeItem('roles');
      
    } catch (error) {
        console.log('Xóa dữ liệu thất bại:', error);
    }
}

export const getRoles = () => {
    try {
       return AsyncStorage.getItem('roles');
    } catch (error) {
        console.log('Lấy dữ liệu thất bại:', error);
    }
    
}

