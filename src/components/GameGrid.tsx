import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

function GameGrid() {
    const {games , error} = useGames(); 
    return (
        <>
            {error && <h2> {error} </h2>}
            <SimpleGrid columns={{sm : 1 , md : 2 , lg : 3 , xl : 5}} spacing={10} padding={10}>
                {games.map(game =>(
                   <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid