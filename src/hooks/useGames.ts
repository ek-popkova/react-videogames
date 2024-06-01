import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery} from "../instances";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            },
        }),

    })
    // useData<Game>(
    //     '/games',
    //     {
    //         params: {
    //             genres: gameQuery.genre?.id,
    //             parent_platforms: gameQuery.platform?.id,
    //             ordering: gameQuery.sortOrder,
    //             search: gameQuery.searchText
    //         }
    //     }, [gameQuery]);


export default useGames;