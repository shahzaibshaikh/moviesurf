import { SimpleGrid, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiClient from '../services/api-client';
import HomeCard from './HomeCard';
import { setData, setError, setLoading } from '../redux/slices/movieSlice';
import useMovies from '../hooks/useMovies';
import useShows from '../hooks/useShows';

function HomeGrid(): JSX.Element {
  const { loading: movieLoading, error: movieError, data: movieData } = useMovies();
  const { loading: showLoading, error: showError, data: showData } = useShows();

  return (
    <Box padding='32px' marginTop={16}>
      {movieLoading && <h2>Loading...</h2>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6}>
        {movieData?.Search?.map((item: any) => (
          <HomeCard key={item.imdbID} Poster={item.Poster} Title={item.Title} />
        ))}
      </SimpleGrid>

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
