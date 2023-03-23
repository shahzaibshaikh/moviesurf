import { HStack, Image } from '@chakra-ui/react';
import SearchInput from './SearchInput';

function Navbar(): JSX.Element {
  return (
    <HStack padding='16px 40px'>
      <Image src='' />
      <SearchInput />
    </HStack>
  );
}

export default Navbar;
