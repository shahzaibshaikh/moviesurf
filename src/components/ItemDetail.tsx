import { Box } from '@chakra-ui/react';
import useDetail from '../hooks/useDetail';
import { ItemState } from '../redux/slices/itemDetailSlice';

function ItemDetail() {
  const { loading, error, data }: ItemState = useDetail();
  return <Box>Details</Box>;
}

export default ItemDetail;
