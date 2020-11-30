import axios from 'axios';
import queryString from 'querystring';
import Constant from "../Constant";

const axiosClient = axios.create({
    baseURL: Constant.API_BASE_URL,
    timeout: 30000,
    paramsSerializer: params => queryString.stringify(params),
});

axios.interceptors.request.use(function (config) {
    const backgroundCall = config.data && config.data.background === true;
    if(!backgroundCall){
        // show loading
    }

    const headers = {
        'content-type': 'application/json',
    }

    config.headers.common = headers;
    return config;
})

export default axiosClient;

