import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

async function http<T>(config: AxiosRequestConfig): Promise<T> {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        timeout: 10000,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        validateStatus: function () {
            return true;
        },
    });
    instance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );
    const { data } = await instance.request<T>(config);
    return data;
}

export default http;
