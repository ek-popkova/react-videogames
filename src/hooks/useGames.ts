import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery} from "../instances";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            },
        }),
        getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000 //24h

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