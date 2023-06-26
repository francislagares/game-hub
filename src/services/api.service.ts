import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_RAWG_BASE_URL,
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

class ApiService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getAll = async (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  };

  public get = async (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data);
  };
}

export default ApiService;
