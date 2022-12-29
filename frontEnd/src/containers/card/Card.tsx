import { FC } from 'react'
import { Container } from './cardStyles'

interface IProps {
  children: JSX.Element[]
  padding?: string
}

const Card: FC<IProps> = ({ children, padding }) => {
  return <Container padding={padding}>{children}</Container>
}

export default Card
