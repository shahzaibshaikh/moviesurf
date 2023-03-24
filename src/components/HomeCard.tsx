import {
  Card,
  CardBody,
  Heading,
  Image,
  LinkBox,
  Box,
  LinkOverlay
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

interface HomeCard {
  Poster: string;
  Title: string;
  imdbID: string;
}

function HomeCard({ Poster, Title, imdbID }: HomeCard): JSX.Element {
  return (
    <LinkBox as='div'>
      <Card
        background='#1b1b1b'
        _hover={{ background: '#262626', transition: '300ms' }}
        padding={4}
        boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
        borderRadius={8}
      >
        <Image src={Poster} borderRadius={8} boxShadow='0 10px 12px rgba(0, 0, 0, .3)' />
        <CardBody padding={0} marginTop={4}>
          <Heading fontSize={22} marginBottom={1}>
            <LinkOverlay as={ReactLink} to={`/${imdbID}`}>
              {Title}
            </LinkOverlay>
          </Heading>
        </CardBody>
      </Card>
    </LinkBox>
  );
}

export default HomeCard;
