import axios from 'axios';

export const baseUrl = 'https://jostum-engineering-journal-backend.onrender.com';

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
