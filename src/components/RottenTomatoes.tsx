import { Badge, HStack, Text } from '@chakra-ui/react';
import { SiRottentomatoes } from 'react-icons/si';

interface RottenTomatoesScoreProps {
  score?: string;
}

function RottenTomatoes({ score }: RottenTomatoesScoreProps) {
  let color;
  if (!score) return <></>;
  if (score) {
    if (parseInt(score) >= 80) {
      color = 'green';
    } else if (parseInt(score) >= 60) {
      color = 'yellow';
    } else {
      color = 'red';
    }
  }
  return (
    <HStack>
      <SiRottentomatoes color='red' size={20} />
      <Badge fontSize={14} colorScheme={color} borderRadius={4}>
        {score}
      </Badge>
    </HStack>
  );
}

export default RottenTomatoes;
