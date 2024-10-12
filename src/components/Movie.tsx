import { Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";

interface MovieProps {
  gameId: number;
}

const Movie = ({ gameId }: MovieProps) => {
  const { data, error, isLoading } = useMovies(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstMovie = data?.results[0];
  return firstMovie ? (
    <video src={firstMovie.data[480]} poster={firstMovie.preview} controls />
  ) : null;
};

export default Movie;
