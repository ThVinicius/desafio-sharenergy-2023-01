import Skeleton from '@mui/material/Skeleton'
import { FC } from 'react'
import { SkeletonContainer } from './renderDogStyle'

const SkeletonDog: FC = () => {
  return (
    <SkeletonContainer
      variant="rounded"
      sx={{
        bgcolor: '#eee',
        borderRadius: '20px',
        width: '600px',
        height: '600px'
      }}
    />
  )
}

export default SkeletonDog
