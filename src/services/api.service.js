import axios from 'axios';

export let BASE_URL;
const dev = true;

if (dev) {
    BASE_URL = 'http://127.0.0.1:8000';

} else {
    BASE_URL = 'https://api.productiondomain.com';

}
export const BASE_URL_API = `${BASE_URL}/api`;

export default function Api() {
    const token = 'XXXXXXX';

    const api = axios.create({
        baseURL: BASE_URL_API,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });

    api.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.response?.status === 401) {
            location.href = '/auth/login';
        }
        return Promise.reject(error);
    });

    return api;
}