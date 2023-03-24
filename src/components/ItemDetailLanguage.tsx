import { HStack, Text } from '@chakra-ui/react';

interface DetailLanguageProps {
  language?: string;
}

function ItemDetailLanguage({ language }: DetailLanguageProps) {
  return (
    <HStack marginBottom={4}>
      <Text fontWeight={700}>Languages: </Text>
      <Text>{language}</Text>
    </HStack>
  );
}

export default ItemDetailLanguage;
