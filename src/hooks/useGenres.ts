import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Genre } from './../instances';
import genres from '../data/genres';
import APIClient from './../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => 
    useQuery(
        {
            queryKey: ['genres'],
            queryFn: apiClient.getAll,
            staleTime: 24 * 60 * 60 * 1000, //24h
            initialData: { count: genres.length, results: genres, next: null }
        }
);

export default useGenres;