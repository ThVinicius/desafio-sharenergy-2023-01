import { FC } from 'react'
import { Container, Box } from './logoutStyle'

interface IProps {
  logout: () => void
  imgs: string[]
}

const Logout: FC<IProps> = ({ logout, imgs }) => {
  return (
    <Container onClick={logout}>
      <Box>
        Logout
        <img src={imgs[4]} alt="Icon de logout" />
      </Box>
    </Container>
  )
}

export default Logout
