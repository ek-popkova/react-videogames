import { useEffect, useState } from "react";
import { FetchResponse } from "../instances";
import axios, { AxiosRequestConfig, CanceledError } from "axios";

//this is an obsole hook, that is not used in the app anymore
//keep it just as an example of code without React Query

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY
    },
});

const useData =<T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
          const controller = new AbortController();
          setLoading(true);
          apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
              setData(res.data.results);
              setLoading(false);
            })
            .catch((err) => {
              if (err instanceof CanceledError) return;
              setError(err.message);
              setLoading(false);
            });

          return () => controller.abort();
        }, deps ? [...deps] : []);
        return { data, error, isLoading };
}

export default useData;

