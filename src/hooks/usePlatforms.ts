import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Platform } from "../instances";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents'); - old approach with useData

const usePlatforms = () => useQuery(
    {
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: platforms 
    }
);

export default usePlatforms;