import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';
function SkeletonCard() {
  return (
    <Card
      padding={4}
      background='#1b1b1b'
      boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
      borderRadius={8}
    >
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;
