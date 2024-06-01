import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Platform } from "../instances";
import platforms from "../data/platforms";
import APIClient from './../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents'); - old approach with useData

const usePlatforms = () => useQuery(
    {
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: platforms 
    }
);

export default usePlatforms;