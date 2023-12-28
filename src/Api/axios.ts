import axios, { AxiosInstance } from 'axios';

interface CustomAxiosInstance extends AxiosInstance { }

export const customAxios: CustomAxiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api/"
});

export default customAxios