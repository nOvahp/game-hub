import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
    key:'a2e437a961a748a28c428e0b05f84f90'
  }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);

    post = (data: T) => axiosInstance.post(this.endpoint, data);
}

export default APIClient