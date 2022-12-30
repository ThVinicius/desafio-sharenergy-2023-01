import { FC } from 'react'
import usePath from '../../hooks/usePath'
import { Container, Logo, Menu, Logout, BoxItens } from './headerStyles'
import MenuItens from './MenuItens'
import user from '../../assets/images/man.png'
import dog from '../../assets/images/dog.png'
import cat from '../../assets/images/cat.png'
import customer from '../../assets/images/service.png'
import logoutIcon from '../../assets/images/logout.png'
import useLogout from '../../hooks/useLogout'

const Header: FC = () => {
  const { isPath } = usePath(['/users', '/cats', '/dogs', '/customers'])
  const { logout } = useLogout()

  return (
    <>
      {isPath && (
        <Container>
          <Logo>
            <h1>Desafio</h1>
            <img
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="logo shareenergy"
            />
          </Logo>
          <Menu>
            <MenuItens item="Usuários" path="/users" image={user} />
            <MenuItens item="Cats" path="/cats" image={cat} />
            <MenuItens item="Dogs" path="/dogs" image={dog} />
            <MenuItens item="Clientes" path="/customers" image={customer} />
            <BoxItens onClick={logout}>
              <Logout>
                Logout
                <img src={logoutIcon} alt="Icon de logout" />
              </Logout>
            </BoxItens>
          </Menu>
        </Container>
      )}
    </>
  )
}

export default Header
