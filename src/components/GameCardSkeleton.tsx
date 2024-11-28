import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const GameCardSkeleton = () => {
  return (
    /* @ts-ignore */
    <Card>
        <Skeleton width='300px' height='200px' />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}
