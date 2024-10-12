import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface ScreenshotGridProps {
  gameId: number;
}
const ScreenshotGrid = ({ gameId }: ScreenshotGridProps) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((image) => (
        <Image key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  );
};

export default ScreenshotGrid;
