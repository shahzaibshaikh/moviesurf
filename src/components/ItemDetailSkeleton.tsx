import {
  Card,
  HStack,
  CardBody,
  SkeletonText,
  SkeletonCircle,
  Skeleton
} from '@chakra-ui/react';

function ItemDetailSkeleton() {
  return (
    <Card
      padding={5}
      background='#1b1b1b'
      boxShadow='0 8px 8px rgba(0, 0, 0, .3)'
      marginTop={4}
    >
      <HStack spacing={6}>
        <Skeleton width='300px' height='400px' />
        <CardBody alignSelf='flex-start'>
          <SkeletonText marginBottom={4} />
          <HStack spacing={4} marginBottom={4}>
            <SkeletonCircle />
            <SkeletonCircle />
          </HStack>
          <SkeletonText />
          <SkeletonText />
        </CardBody>
      </HStack>
    </Card>
  );
}

export default ItemDetailSkeleton;
