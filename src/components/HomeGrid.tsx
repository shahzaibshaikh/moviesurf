import { SimpleGrid, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiClient from '../services/api-client';
import HomeCard from './HomeCard';
import { setData, setError, setLoading } from '../redux/slices/movieSlice';
import useMovies from '../hooks/useMovies';

function HomeGrid(): JSX.Element {
  const { loading, error, data } = useMovies();

  return (
    <Box padding='32px' marginTop={16}>
      {loading && <h2>Loading...</h2>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={6}>
        {data?.Search?.map((item: any) => (
          <HomeCard key={item.imdbID} Poster={item.Poster} Title={item.Title} />
        ))}
      </SimpleGrid>
      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
