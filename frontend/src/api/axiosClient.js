import axios from 'axios';
import keycloak from '../auth/keycloak';

const http = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor to add token
http.interceptors.request.use(
    async (config) => {
        if (keycloak.authenticated) {
            try {
                const token = keycloak.token;
                config.headers.Authorization = `Bearer ${token}`;
            } catch (error) {
                console.error('Error getting token:', error);
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle 401
http.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Token expired, try to refresh
            try {
                await keycloak.updateToken(30);
                const originalRequest = error.config;
                originalRequest.headers.Authorization = `Bearer ${keycloak.token}`;
                return http(originalRequest);
            } catch (refreshError) {
                keycloak.login();
            }
        }
        return Promise.reject(error);
    }
);

export default http;