import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import HomeGrid from './components/HomeGrid';
import Navbar from './components/Navbar';
function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Grid templateAreas={`'nav' 'main'`}>
      <GridItem area='nav'>
        <Navbar onSearchCall={search => setSearchQuery(search)} />
      </GridItem>
      <GridItem area='main'>
        <HomeGrid searchQuery={searchQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
