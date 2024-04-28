import axios from "axios";
import { getRefreshToken, saveToken } from "../../services/userservice/UserService";
'http://192.168.124.37:5000'
const instance  = axios.create({
    baseURL: 'http://10.0.2.2:5000',
    headers: {
        'content-Type': 'application/json; charset=utf-8',
    },
});


instance.interceptors.response.use(function (response) {
    return response?.data;
}, async function (error) {

    const prevRequest = error?.config;
    if (error.response && error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true;
        console.log('RR',await getRefreshToken())
        const resp = (await refreshToken(await getRefreshToken()));
        console.log(resp);
        saveToken(resp.accessToken, resp.refreshToken, '');
        prevRequest.headers = {
            'Authorization': `Bearer ${resp.accessToken}`,
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