import { Badge, HStack, Text } from '@chakra-ui/react';
import { FaImdb } from 'react-icons/fa';

interface IMDBScoreProps {
  score?: string;
}

function IMDBScore({ score }: IMDBScoreProps) {
  let color;
  if (!score) return <></>;
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
    <HStack>
      <FaImdb color='yellow' size={22} />
      <Badge fontSize={14} colorScheme={color} borderRadius={4}>
        {score}
      </Badge>
    </HStack>
  );
}

export default IMDBScore;
