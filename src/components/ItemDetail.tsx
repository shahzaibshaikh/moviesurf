import { Box, Heading, HStack, LinkOverlay } from '@chakra-ui/react';
import useDetail from '../hooks/useDetail';
import { ItemState } from '../redux/slices/itemDetailSlice';
import { Link as ReactLink } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';

import ItemDetailCard from './ItemDetailCard';

function ItemDetail() {
  const { loading, error, data } = useDetail();
  return (
    <Box padding='32px' marginTop={16}>
      <LinkOverlay as={ReactLink} to='/'>
        <HStack>
          <IoChevronBackSharp size={30} />
          <Heading fontSize={28} marginBottom={4}>
            Details
          </Heading>
        </HStack>
      </LinkOverlay>
      <ItemDetailCard data={data} />
    </Box>
  );
}

export default ItemDetail;
