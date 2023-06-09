import { HStack, Image } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import Logo from '../assets/bitmap.png';
import { useState } from 'react';

interface NavbarProps {
  onSearchCall: (searchQuery: string) => void;
}

function Navbar({ onSearchCall }: NavbarProps): JSX.Element {
  return (
    <HStack
      padding='16px 32px'
      spacing={6}
      position='fixed'
      zIndex={10}
      width='100%'
      background='rgba(0,0,0,0.3)'
      backdropFilter='blur(7px)'
      color='#fff'
    >
      <Image src={Logo} width='180px' />
      {window.location.pathname === '/' ? (
        <SearchInput onSearchCall={onSearchCall} />
      ) : null}
    </HStack>
  );
}

export default Navbar;
