import { Dispatch, SetStateAction, FC } from 'react'
import Drawer from '@mui/material/Drawer'
import { Container, Footer, Content } from './drawerStyle'
import MenuItens from '../../menuItens/MenuItens'
import Logout from '../../logout/Logout'

interface IProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  paths: (
    | { value: string; isRegex: boolean }
    | { value: RegExp; isRegex: boolean }
  )[]
  imgs: string[]
  logout: () => void
}

const MenuDrawer: FC<IProps> = ({ open, setOpen, paths, imgs, logout }) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <Container>
        <Content>
          <MenuItens
            item="Usuários"
            path={paths[0]}
            image={imgs[0]}
            setOpen={setOpen}
          />
          <MenuItens
            item="Cats"
            path={paths[1]}
            image={imgs[1]}
            setOpen={setOpen}
          />
          <MenuItens
            item="Dogs"
            path={paths[2]}
            image={imgs[2]}
            setOpen={setOpen}
          />
          <MenuItens
            item="Clientes"
            path={paths[3]}
            image={imgs[3]}
            setOpen={setOpen}
          />
        </Content>
        <Footer>
          <Logout {...{ logout, imgs }} />
        </Footer>
      </Container>
    </Drawer>
  )
}

export default MenuDrawer
