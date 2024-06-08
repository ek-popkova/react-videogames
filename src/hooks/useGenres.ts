import { useQuery } from '@tanstack/react-query';
import { Genre } from './../instances';
import genres from '../data/genres';
import APIClient from './../services/api-client';
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => 
    useQuery(
        {
            queryKey: ['genres'],
            queryFn: apiClient.getAll,
            staleTime: ms('1d'),
            initialData: { count: genres.length, results: genres, next: null }
        }
);

export default useGenres;