import { Heading, HStack, Image, Card, CardBody, Text } from '@chakra-ui/react';
import { ItemData } from '../redux/slices/itemDetailSlice';
import IMDBScore from './IMDBScore';
import ItemDetailLanguage from './ItemDetailLanguage';

interface ItemDetailProps {
  data?: ItemData;
}

function ItemDetailCard({ data }: ItemDetailProps) {
  return (
    <Card
      padding={5}
      background='#1b1b1b'
      boxShadow='0 8px 8px rgba(0, 0, 0, .3)'
      marginTop={4}
    >
      <HStack spacing={6}>
        <Image
          src={data?.Poster}
          boxShadow='0 6px 6px rgba(0, 0, 0, .3)'
          borderRadius={14}
        />
        <CardBody alignSelf='flex-start'>
          <Heading marginBottom={4}>{data?.Title}</Heading>
          <IMDBScore score={data?.imdbRating} />
          <ItemDetailLanguage language={data?.Language} />
          <Text marginBottom={4}>{data?.Plot}</Text>
        </CardBody>
      </HStack>
    </Card>
  );
}

export default ItemDetailCard;
