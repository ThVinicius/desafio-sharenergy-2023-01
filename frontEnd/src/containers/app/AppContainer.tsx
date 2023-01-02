import { FC } from 'react'
import { Container } from './containerStyles'

interface IProps {
  children: JSX.Element | JSX.Element[]
  calcHeight?: string
}

const AppContainer: FC<IProps> = ({ children, calcHeight = '0px' }) => {
  return <Container calcHeight={calcHeight}>{children}</Container>
}

export default AppContainer
