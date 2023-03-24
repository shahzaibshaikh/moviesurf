import { HStack, Text } from '@chakra-ui/react';

interface DetailDirector {
  director?: string;
}

function ItemDetailDirector({ director }: DetailDirector) {
  return (
    <HStack>
      <Text fontWeight={700}>Director: </Text>
      <Text>{director}</Text>
    </HStack>
  );
}

export default ItemDetailDirector;
