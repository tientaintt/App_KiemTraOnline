import axios from "axios";
import { getRefreshToken, saveToken } from "../../services/userservice/UserService";

const instance  = axios.create({
    baseURL: 'http://192.168.124.137:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});


instance.interceptors.response.use(function (response) {
    return response?.data;
}, async function (error) {

    const prevRequest = error?.config;
    if (error.response && error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true;
        const resp = (await refreshToken(getRefreshToken()));
        saveToken(resp.accessToken, resp.refreshToken, '');
        prevRequest.headers = {
            authorization: `Bearer ${resp.accessToken}`,
            'Content-Type': 'application/json'
        };
        return instance(prevRequest);
    }

    return Promise.reject(error);
});

const refreshToken = (data) => instance({
    url: '/refresh_token',
    method: 'post',
    data: {
        'refreshToken': data
    }
})
export default instance;