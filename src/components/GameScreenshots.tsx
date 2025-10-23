import React from 'react'
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';


interface Props {
    gameId: number
}
const GameScreenshots = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenshots(gameId);

    if (error) throw error;

    if (isLoading) return null;

    if (!data) return null;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2} marginY={5}>
        {data?.results.map(screenshot => (
            <Image key={screenshot.id} src={screenshot.image} />
        ))}
    </SimpleGrid>
  )
}

export default GameScreenshots