import { useQuery } from "@tanstack/react-query";
import { Platform } from "../instances";
import platforms from "../data/platforms";
import APIClient from './../services/api-client';
import ms from "ms";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents'); - old approach with useData

const usePlatforms = () => useQuery(
    {
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('1d'),
        initialData: { count: platforms.length, results: platforms, next: null }
    }
);

export default usePlatforms;