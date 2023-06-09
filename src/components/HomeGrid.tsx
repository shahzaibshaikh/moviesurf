import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import SkeletonCard from './SkeletonCard';
import { MovieState } from '../redux/slices/movieSlice';
import { ShowState } from '../redux/slices/showsSlice';
import useShows from '../hooks/useShows';
import useMovies from '../hooks/useMovies';

interface HomeGridProps {
  searchQuery: string;
}

function HomeGrid({ searchQuery }: HomeGridProps): JSX.Element {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const {
    loading: movieLoading,
    error: movieError,
    data: movieData
  }: MovieState = useMovies(searchQuery);

  const {
    loading: showLoading,
    error: showError,
    data: showData
  }: ShowState = useShows(searchQuery);

  return (
    <Box padding='32px' marginTop={16}>
      <Heading fontSize={28} marginBottom={4}>
        Movies
      </Heading>
      {(showLoading || movieLoading) && (
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6}>
          {skeleton.map((item: any) => (
            <SkeletonCard key={item} />
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6}>
        {movieData?.Search?.map((item: any) => (
          <HomeCard
            key={item.imdbID}
            imdbID={item.imdbID}
            Poster={item.Poster}
            Title={item.Title}
          />
        ))}
      </SimpleGrid>

      <Heading fontSize={28} marginBottom={4} marginTop={8}>
        TV Shows
      </Heading>
      {(showLoading || movieLoading) && (
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6}>
          {skeleton.map((item: any) => (
            <SkeletonCard key={item} />
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6} marginTop={6}>
        {showData?.Search?.map((item: any) => (
          <HomeCard
            key={item.imdbID}
            imdbID={item.imdbID}
            Poster={item.Poster}
            Title={item.Title}
          />
        ))}
      </SimpleGrid>

      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
