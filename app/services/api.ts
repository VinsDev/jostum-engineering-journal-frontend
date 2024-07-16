import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jostum-engineering-journal-backend.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
