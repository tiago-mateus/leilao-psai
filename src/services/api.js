import axios from 'axios';

const api = axios.create({
    baseURL: 'http://144.126.209.107:3333/',
})

export default api;