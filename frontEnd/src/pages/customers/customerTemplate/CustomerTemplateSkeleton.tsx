import Skeleton from '@mui/material/Skeleton/Skeleton'
import { FC } from 'react'

const CustomerTemplateSkeleton: FC = () => {
  return (
    <>
      {[...Array(3)].map((item, index) => (
        <Skeleton
          animation="wave"
          variant="rounded"
          width={350}
          height={272}
          sx={{ bgcolor: '#eee', borderRadius: '20px' }}
          key={index}
        />
      ))}
    </>
  )
}

export default CustomerTemplateSkeleton
