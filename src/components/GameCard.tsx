import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import { CriticScore } from './CriticScore';
import getCroppedImgUrl from '../services/img-url';
import { wrap } from 'framer-motion';
import { Emoji } from './Emoji';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        // @ts-ignore
        <Card>
            <Image src={getCroppedImgUrl(game.background_image)} />
            <CardBody>
                <HStack display='flex' flexWrap='wrap' justifyContent='space-between' marginBottom={3}>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl' marginBottom='12px'>
                    {game.name} <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard