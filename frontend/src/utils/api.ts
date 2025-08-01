import axios from 'axios';
import type { ApiResponse } from '../types';

// Create axios instance with default config
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add auth token
api.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: unknown) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors
api.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: any) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// API helper functions
export const apiClient = {
    get: <T>(url: string, params?: Record<string, unknown>) => {
        return api.get<ApiResponse<T>>(url, { params });
    },

    post: <T>(url: string, data?: Record<string, unknown>) => {
        return api.post<ApiResponse<T>>(url, data);
    },

    put: <T>(url: string, data?: Record<string, unknown>) => {
        return api.put<ApiResponse<T>>(url, data);
    },

    delete: <T>(url: string) => {
        return api.delete<ApiResponse<T>>(url);
    },

    patch: <T>(url: string, data?: Record<string, unknown>) => {
        return api.patch<ApiResponse<T>>(url, data);
    },
};

export default api; 