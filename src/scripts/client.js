import axios from 'axios';
import { SERVER_URL } from './consts.js';

const authClient = axios.create({
    baseURL: SERVER_URL + '/auth',
});


export default authClient;