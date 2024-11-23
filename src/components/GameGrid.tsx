import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number,
    name: string
}

interface fetchGamesResponse {
    count: number,
    next: string,
    previous: string,
    results: Game[]
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<fetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    })

    return (
        <>
            {error && <p> {error} </p>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )

}

export default GameGrid