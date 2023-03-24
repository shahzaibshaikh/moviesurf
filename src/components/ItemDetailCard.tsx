import { Heading, HStack, Image, Card, CardBody, Text } from '@chakra-ui/react';
import { ItemData } from '../redux/slices/itemDetailSlice';
import IMDBScore from './IMDBScore';
import ItemDetailActors from './ItemDetailActors';
import ItemDetailDirector from './ItemDetailDirector';
import ItemDetailLanguage from './ItemDetailLanguage';
import ItemDetailRelease from './ItemDetailRelease';
import RottenTomatoes from './RottenTomatoes';

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
          <HStack spacing={4} marginBottom={4}>
            <IMDBScore score={data?.imdbRating} />
            <RottenTomatoes score={data?.Ratings[1]?.Value} />
          </HStack>
          <ItemDetailDirector director={data?.Director} />
          <ItemDetailActors actors={data?.Actors} />
          <ItemDetailLanguage language={data?.Language} />
          <ItemDetailRelease date={data?.Released} />
          <Text marginBottom={4}>{data?.Plot}</Text>
        </CardBody>
      </HStack>
    </Card>
  );
}

export default ItemDetailCard;
