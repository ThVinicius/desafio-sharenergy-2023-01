import { FC } from 'react'
import { Container } from './cardStyles'

interface IProps {
  children: JSX.Element | JSX.Element[]
  padding?: string
  width?: string
}

const Card: FC<IProps> = ({ children, padding, width }) => {
  return (
    <Container padding={padding} width={width}>
      {children}
    </Container>
  )
}

export default Card
