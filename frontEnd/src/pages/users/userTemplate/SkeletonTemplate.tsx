import Skeleton from '@mui/material/Skeleton'
import { FC } from 'react'
import { SkeletonContainer, UsersContainer } from './userTemplateStyle'

const SkeletonTemplate: FC = () => {
  return (
    <UsersContainer>
      {[...Array(10)].map((item, index) => (
        <SkeletonContainer key={index}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={90}
            height={90}
            sx={{ bgcolor: '#eee', marginBottom: '-45px' }}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={350}
            height={300}
            sx={{ bgcolor: '#eee', borderRadius: '20px' }}
          />
        </SkeletonContainer>
      ))}
    </UsersContainer>
  )
}

export default SkeletonTemplate
