import { HStack, Text } from '@chakra-ui/react';

interface DetailDateProps {
  date?: string;
}

function ItemDetailRelease({ date }: DetailDateProps) {
  return (
    <HStack marginBottom={4}>
      <Text fontWeight={700}>Release date: </Text>
      <Text>{date}</Text>
    </HStack>
  );
}

export default ItemDetailRelease;
