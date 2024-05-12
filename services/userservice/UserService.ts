import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from '../../config/axios/axios'
import { AxiosResponse } from "axios";
const loginInUrl = '/login';
const registerUrl = '/signup/student'
const getCodeForgotPasswordUrl = '/api/password/request-reset'
const resetPasswordUrl = '/api/password/reset';
const changePasswordUrl = '/api/change-password';
const getVerifyCodeEmailUrl = '/api/email/send-verification';
const verifyEmailUrl='/api/email/verify'

export const verifyEmailService=async(code:String)=>{
    let accessToken = await getAccessToken();
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: verifyEmailUrl,
        data: {
            code:code
        },
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    };
    console.log(config);
    return await axios.request(config);
}

export const getVerifyCodeEmailService = async () => {
    let accessToken = await getAccessToken();
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: getVerifyCodeEmailUrl,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    };
    console.log(config);
    return await axios.request(config);
}

export const changePasswordService = async (data) => {
    let accessToken = await getAccessToken();
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: changePasswordUrl,
        data: data,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json"
        }
    };
    console.log(config);
    return await axios.request(config);
}
export const resetPasswordService = async (body: any) => {
    const { emailAddress, ...data } = body;
    console.log(data);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: resetPasswordUrl + `/EMAIL:${emailAddress}`,
        data: data
    };
    console.log(config);
    return await axios.request(config);
}

export const getCodeForgotPasswordService = async (emailAddress: string) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: getCodeForgotPasswordUrl + `/EMAIL:${emailAddress}`,

    };
    console.log(config);
    return await axios.request(config);
}

export const registerService = async (body: string) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: registerUrl,
        data: body
    };
    console.log(config);
    return await axios.request(config);
}

export const loginInService = async (body: string) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: loginInUrl,
        data: body
    };
    console.log(config);
    return await axios.request(config);
}

export const getAccessToken = async () => {
    try {
        const value = await AsyncStorage.getItem('accessToken');
        if (value !== null) {
            return value;
        } else {
            console.log('Không tìm thấy giá trị token.');
        }
    } catch (error) {
        console.log('Truy xuất dữ liệu thất bại:', error);
    }
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
        console.log('Dữ liệu savetoken đã được lưu trữ thành công.');
    } catch (error) {
        console.log('Lưu trữ dữ liệu thất bại:', error);
    }
}
export const saveCredential = async (userInfor: any) => {
    console.log('userInfor: ', userInfor.accessToken);
    try {
        await AsyncStorage.setItem('userInfor', JSON.stringify(userInfor));

        console.log('Dữ liệu userInfo đã được lưu trữ thành công.');
    } catch (error) {
        console.log('Lưu trữ dữ liệu thất bại:', error);
    }

    await saveToken(userInfor.accessToken, userInfor.refreshToken, JSON.stringify(userInfor.roles));
}

export const getCredential = () => {

    try {

        return AsyncStorage.getItem('userInfor');

    } catch (error) {
        console.log('Lấy dữ liệu thất bại:', error);
    }

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
export const removeCredential = () => {

    try {
        AsyncStorage.removeItem('userInfor');


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

