import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

interface HomeCard {
  Poster: string;
  Title: string;
}

function HomeCard({ Poster, Title }: HomeCard): JSX.Element {
  return (
    <Card
      background='#1b1b1b'
      _hover={{ background: '#262626', transition: '300ms' }}
      padding={4}
      boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
      borderRadius={5}
    >
      <Image src={Poster} borderRadius={5} boxShadow='0 10px 20px rgba(0, 0, 0, .6)' />
      <CardBody padding={0} marginTop={4}>
        <Heading size='1xl' marginBottom={1}>
          {Title}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default HomeCard;
