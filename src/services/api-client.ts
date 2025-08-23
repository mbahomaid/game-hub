import axios, { Axios, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2b10cc05fd37433597f39ced33e54be3'
    }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data);
  }
}

export default APIClient;