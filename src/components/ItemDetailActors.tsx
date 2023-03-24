import { HStack, Text } from '@chakra-ui/react';

interface DetailActorsProps {
  actors?: string;
}

function ItemDetailActors({ actors }: DetailActorsProps) {
  return (
    <HStack>
      <Text fontWeight={700}>Actors: </Text>
      <Text>{actors}</Text>
    </HStack>
  );
}

export default ItemDetailActors;
