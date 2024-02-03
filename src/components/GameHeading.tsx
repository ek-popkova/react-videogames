import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../instances";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize="4xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
