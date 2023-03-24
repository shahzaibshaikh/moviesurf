import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  ItemState,
  setData,
  setError,
  setLoading
} from '../redux/slices/itemDetailSlice';
import apiClient from '../services/api-client';

function useDetail<ItemState>() {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const { loading, error, data } = useSelector((state: any) => state.itemDetail);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.get(`?apiKey=${API_KEY}&i=${imdbID}`);
        dispatch(setData(response.data));
        dispatch(setLoading(false));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [dispatch, imdbID]);

  return { data, error, loading };
}

export default useDetail;
