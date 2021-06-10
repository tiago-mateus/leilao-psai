import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-leilao-virtual.herokuapp.com/',
})

export default api;