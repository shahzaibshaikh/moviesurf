import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import useMovies from '../hooks/useMovies';
import useShows from '../hooks/useShows';

interface HomeGridProps {
  searchQuery: string;
}

function HomeGrid({ searchQuery }: HomeGridProps): JSX.Element {
  const {
    loading: movieLoading,
    error: movieError,
    data: movieData
  } = useMovies(searchQuery);

  const {
    loading: showLoading,
    error: showError,
    data: showData
  } = useShows(searchQuery);

  return (
    <Box padding='32px' marginTop={16}>
      {movieLoading && <h2>Loading...</h2>}
      {movieData?.Search && (
        <Heading fontSize={28} marginBottom={4}>
          Movies
        </Heading>
      )}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6}>
        {movieData?.Search?.map((item: any) => (
          <HomeCard key={item.imdbID} Poster={item.Poster} Title={item.Title} />
        ))}
      </SimpleGrid>

      {showData?.Search && (
        <Heading fontSize={28} marginBottom={4} marginTop={8}>
          TV Shows
        </Heading>
      )}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6} marginTop={6}>
        {showData?.Search?.map((item: any) => (
          <HomeCard key={item.imdbID} Poster={item.Poster} Title={item.Title} />
        ))}
      </SimpleGrid>

      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
