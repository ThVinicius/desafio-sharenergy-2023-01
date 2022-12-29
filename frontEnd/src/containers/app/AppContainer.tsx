import { FC } from 'react'
import { Container } from './containerStyles'

interface IProps {
  children: JSX.Element
}

const AppContainer: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default AppContainer
