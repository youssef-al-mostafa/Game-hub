import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
    gameQuery : GameQuery ; 
};

export const GameHeading = ({gameQuery} : Props) => {

  const heading = `${gameQuery.platform?.name || ''} 
                   ${gameQuery.genre?.name || ''} 
                   ${(gameQuery.genre || gameQuery.platform) ? '' : 'All'} 
                   Games`;

  return (
    /* @ts-ignore */
    <Heading as='h1' padding={10}>
        {heading}
    </Heading>
  )

};
