import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://64fc0f1b605a026163ae24ec.mockapi.io/api/v1/',
    headers: {'Content-Type': 'application/json'}
});

export default axiosInstance;