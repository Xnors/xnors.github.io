import axios from 'axios';
import { SERVER_URL } from './consts.js';

const authClient = axios.create({
    baseURL: SERVER_URL + '/auth',
});

// authClient.interceptors.request.use(config => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export default authClient;