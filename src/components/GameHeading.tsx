import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../instances";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenre(selectedGenreId);

  const platform = usePlatform(selectedPlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="4xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
