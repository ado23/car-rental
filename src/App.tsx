import { Grid, GridItem } from "@chakra-ui/react";

import { Footer, Navbar } from "layout/index";
import AppRoutes from "router/Router";

const App = () => (
  <Grid
    h="100vh"
    w="100%"
    templateAreas={`
          "navbar navbar navbar"
          "main main main"
          "footer footer footer"
        `}
    templateRows="auto 1fr"
    templateColumns="1fr 2fr 1fr"
  >
    <GridItem area="navbar" position="sticky" top={0}>
      <Navbar />
    </GridItem>
    <GridItem area="main">
      <AppRoutes />
    </GridItem>
    <GridItem area="footer">
      <Footer />
    </GridItem>
  </Grid>
);

export default App;
