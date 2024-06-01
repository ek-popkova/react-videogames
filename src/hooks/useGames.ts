import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery} from "../instances";
import apiClient from "../services/api-client";

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Game>>('/games', {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText
                    },
                })
                .then(res => res.data)
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