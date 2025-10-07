import axios from 'axios';
import { SERVER_URL } from './consts.js';

const apiClient = axios.create({
    baseURL: SERVER_URL + '/api',
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;