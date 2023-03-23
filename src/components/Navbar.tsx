import { HStack, Image } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import Logo from '../assets/bitmap.png';

function Navbar(): JSX.Element {
  return (
    <HStack padding='16px 32px' spacing={6} position='fixed' zIndex={10} width='100%'>
      <Image src={Logo} width='180px' />
      <SearchInput />
    </HStack>
  );
}

export default Navbar;
