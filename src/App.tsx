import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformIconList from "./components/PlatformIconList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


function App() {
  

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar
          
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"5"}>
          <GenreList
           
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingLeft={9}>
          <GameHeading  />
          <HStack spacing={"5"} marginBottom={-2}>
            <PlatformSelector

            />

            <SortSelector
             
            />
          </HStack>
        </Box>
        <GameGrid  />
      </GridItem>
    </Grid>
  );
}

export default App;
