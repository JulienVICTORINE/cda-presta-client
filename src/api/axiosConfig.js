import axios from 'axios';

const baseURL = 'http://localhost:3001';

const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json' // Type de contenu pour les requêtes JSON
    }
});

const API_URL = '/api/';

export { instance, API_URL };