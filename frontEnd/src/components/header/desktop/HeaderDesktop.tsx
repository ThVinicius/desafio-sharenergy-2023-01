import { FC } from 'react'
import MenuItens from '../menuItens/MenuItens'
import Logo from '../../logo/Logo'
import Logout from '../logout/Logout'
import { Menu } from './headerDesktopStyle'

interface IProps {
  logout: () => void
  paths: (
    | { value: string; isRegex: boolean }
    | { value: RegExp; isRegex: boolean }
  )[]
  imgs: string[]
}

const HeaderDesktop: FC<IProps> = ({ logout, paths, imgs }) => {
  return (
    <>
      <Logo />
      <Menu>
        <MenuItens item="Usuários" path={paths[0]} image={imgs[0]} />
        <MenuItens item="Cats" path={paths[1]} image={imgs[1]} />
        <MenuItens item="Dogs" path={paths[2]} image={imgs[2]} />
        <MenuItens
          item="Clientes"
          path={paths[3]}
          image={imgs[3]}
          dataCy="btn-customers"
        />
        <Logout {...{ imgs, logout }} />
      </Menu>
    </>
  )
}

export default HeaderDesktop
