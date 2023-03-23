import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

function SearchInput(): JSX.Element {
  return (
    <form
      style={{ width: '100%' }}
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch color='black' />} />
        <input className='search-input' placeholder='What do you want to listen to?' />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
