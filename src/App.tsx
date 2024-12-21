import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder : string ; 
  searchText : string ; 
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    /* @ts-ignore */
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      } as const}
      templateColumns={{
        base: 'fr',
        lg: '200px fr'
      }}>
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <Flex gap='12px' paddingLeft='38px' marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector 
          sortOrder={gameQuery.sortOrder}
          onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery , sortOrder })}/>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
