import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchProps {
  onSearchCall: (searchQuery: string) => void;
}

function SearchInput({ onSearchCall }: SearchProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <form
      style={{ width: '100%' }}
      onSubmit={event => {
        event.preventDefault();
        onSearchCall(searchQuery);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch color='black' />} />
        <input
          value={searchQuery}
          onChange={(event: any) => setSearchQuery(event.target.value)}
          className='search-input'
          placeholder='What do you want to listen to?'
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
