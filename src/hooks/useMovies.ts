import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Movie } from "../instances";
    

const useMovies = (gameId: number) => { 
    const apiClient = new APIClient<Movie>(`/games/${gameId}/movies`);
    return useQuery(
        {
            queryKey: ['movies', gameId],
            queryFn: apiClient.getAll
        }
    );
}

export default useMovies;