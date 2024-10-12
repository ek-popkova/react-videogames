import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionItemProps {
  title: string;
  children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ title, children }: DefinitionItemProps) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
