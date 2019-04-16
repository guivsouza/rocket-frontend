import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocket-deguste.herokuapp.com',
});

export default api;