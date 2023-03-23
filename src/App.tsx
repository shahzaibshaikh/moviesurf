import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/Navbar';
function App(): JSX.Element {
  return (
    <Grid templateAreas={`'nav' 'main'`}>
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <GridItem area='main'>Main</GridItem>
    </Grid>
  );
}

export default App;
