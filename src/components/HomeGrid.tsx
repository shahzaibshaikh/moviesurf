import { SimpleGrid, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiClient from '../services/api-client';
import HomeCard from './HomeCard';
import { setData, setError, setLoading } from '../redux/slices/movieSlice';

function HomeGrid(): JSX.Element {
  const dispatch = useDispatch();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const movieText = 'Harry';
  const { loading, error, data } = useSelector((state: any) => state.movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.get(
          `?apiKey=${API_KEY}&s=${movieText}&type=movie`
        );
        dispatch(setData(response.data));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, []);

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
