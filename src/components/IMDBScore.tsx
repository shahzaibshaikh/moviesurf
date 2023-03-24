import { Badge } from '@chakra-ui/react';

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
    <Badge fontSize={13} colorScheme={color} marginBottom={4}>
      {score}
    </Badge>
  );
}

export default IMDBScore;
