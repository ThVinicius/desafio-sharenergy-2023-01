import styled from 'styled-components'
import Skeleton from '@mui/material/Skeleton'

const Video = styled.video`
  width: 621px;
  height: 420px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 10px 5px;
`

const Image = styled.img`
  width: 621px;
  height: 420px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 10px 5px;
`

const Container = styled.div``

const SkeletonContainer = styled(Skeleton)`
  width: 600px;
  height: 600px;
`

export { Video, Image, Container, SkeletonContainer }
