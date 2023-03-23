import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, setLoading } from '../redux/slices/showsSlice';
import apiClient from '../services/api-client';

function useShows() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.movies);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const showText = 'John';

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.get(
          `?apiKey=${API_KEY}&s=${showText}&type=series`
        );
        dispatch(setData(response.data));
        dispatch(setLoading(false));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);

  return { data, error, loading };
}

export default useShows;
