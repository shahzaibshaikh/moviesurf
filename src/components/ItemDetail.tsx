import {
  Box,
  Heading,
  HStack,
  Image,
  LinkOverlay,
  Card,
  VStack,
  CardBody
} from '@chakra-ui/react';
import useDetail from '../hooks/useDetail';
import { ItemState } from '../redux/slices/itemDetailSlice';
import { Link as ReactLink } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';

function ItemDetail() {
  const { loading, error, data }: ItemState = useDetail();
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

      <Card
        padding={5}
        background='#1b1b1b'
        boxShadow='0 8px 8px rgba(0, 0, 0, .3)'
        marginTop={4}
      >
        <HStack spacing={6}>
          <Image
            src={data?.Poster}
            boxShadow='0 6px 6px rgba(0, 0, 0, .3)'
            borderRadius={14}
          />
          <CardBody alignItems='flex-start' justifyContent='flex-start'>
            <Heading>{data?.Title}</Heading>
          </CardBody>
        </HStack>
      </Card>
    </Box>
  );
}

export default ItemDetail;
