import { FC } from 'react'
import { Container } from './alignCenterStyles'
import AppContainer from '../app/AppContainer'

interface IProps {
  children: JSX.Element
}

const AlignCenter: FC<IProps> = ({ children }) => {
  return (
    <AppContainer>
      <Container>{children}</Container>
    </AppContainer>
  )
}

export default AlignCenter
