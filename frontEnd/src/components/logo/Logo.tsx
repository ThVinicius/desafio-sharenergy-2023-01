import { FC } from 'react'
import { Container } from './logoStyle'

const Logo: FC = () => {
  return (
    <Container>
      <h1>Desafio</h1>
      <img
        src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
        alt="logo shareenergy"
      />
    </Container>
  )
}

export default Logo
