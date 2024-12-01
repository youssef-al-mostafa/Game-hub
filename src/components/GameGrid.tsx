import { SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';
import { Genre } from '../hooks/useGenre';

interface Props {
    selectedGenre : Genre | null
}

function GameGrid({selectedGenre} : Props ) {
    const { data, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {error && <h2> {error} </h2>}
            {/* @ts-ignore */}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding={10}>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton} >
                        <GameCardSkeleton/>
                    </GameCardContainer>
                ))}
                {data.map(game => (
                    <GameCardContainer key={game.id} >
                        <GameCard game={game} />
                    </GameCardContainer>
                )
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid