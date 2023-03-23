import { Grid, GridItem } from '@chakra-ui/react';
import HomeGrid from './components/HomeGrid';
import Navbar from './components/Navbar';
function App(): JSX.Element {
  return (
    <Grid templateAreas={`'nav' 'main'`}>
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <GridItem area='main'>
        <HomeGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
