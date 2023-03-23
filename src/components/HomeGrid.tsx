import { SimpleGrid, Box } from '@chakra-ui/react';
import HomeCard from './HomeCard';

function HomeGrid(): JSX.Element {
  return (
    <Box padding='32px' marginTop={16}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </SimpleGrid>
      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
