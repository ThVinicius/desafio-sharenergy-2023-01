import { FC } from 'react'
import { Container } from './alignCenterStyles'
import AppContainer from '../app/AppContainer'

interface IProps {
  children: JSX.Element
  calcHeight?: string
}

const AlignCenter: FC<IProps> = ({ children, calcHeight = '0px' }) => {
  return (
    <AppContainer calcHeight={calcHeight}>
      <Container>{children}</Container>
    </AppContainer>
  )
}

export default AlignCenter
