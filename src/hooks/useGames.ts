import { Game, GameQuery, Genre, Platform } from "../instances";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        '/games',
        {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id
            }
        }, [gameQuery]);

export default useGames;