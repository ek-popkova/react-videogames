import { Genre } from "../instances";
import useData from "./useData";

const useGenres = () => useData<Genre>('/genres');

export default useGenres;