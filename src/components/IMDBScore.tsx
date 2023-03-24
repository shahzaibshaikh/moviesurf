import { Badge, HStack, Text } from '@chakra-ui/react';

interface IMDBScoreProps {
  score?: string;
}

function IMDBScore({ score }: IMDBScoreProps) {
  let color;
  if (score) {
    if (parseInt(score) >= 7) {
      color = 'green';
    } else if (parseInt(score) >= 5) {
      color = 'yellow';
    } else {
      color = 'red';
    }
  }
  return (
    <HStack marginBottom={4}>
      <Text fontWeight={700}>IMDB:</Text>
      <Badge fontSize={13} colorScheme={color}>
        {score}
      </Badge>
    </HStack>
  );
}

export default IMDBScore;
