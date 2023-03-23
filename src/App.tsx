import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeGrid from './components/HomeGrid';
import ItemDetail from './components/ItemDetail';
import Navbar from './components/Navbar';
function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('John');
  return (
    <Grid templateAreas={`'nav' 'main'`}>
      <GridItem area='nav'>
        <Navbar onSearchCall={search => setSearchQuery(search)} />
      </GridItem>
      <GridItem area='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeGrid searchQuery={searchQuery} />} />
            <Route path='/:imdbID' element={<ItemDetail />} />
          </Routes>
        </BrowserRouter>
      </GridItem>
    </Grid>
  );
}

export default App;
