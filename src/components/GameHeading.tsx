import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../instances";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="4xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
