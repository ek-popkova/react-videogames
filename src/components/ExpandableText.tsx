import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  if (!children) return null;
  const limit = 300;

  if (children.length < limit) {
    return <Text>{children}</Text>;
  }
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(!isExpanded);

  return (
    <>
      <Text marginLeft={1}>
        {isExpanded ? children : `${children.slice(0, limit)}...`}
      </Text>
      <Button
        onClick={toggleText}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};

export default ExpandableText;
