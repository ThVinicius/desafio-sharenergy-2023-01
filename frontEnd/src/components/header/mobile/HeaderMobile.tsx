import { FC, useState } from 'react'
import menuIcon from '../../../assets/images/hamburger_icon.svg'
import Logo from '../../logo/Logo'
import MenuDrawer from './drawer/Drawer'
import { Container, MenuIcon } from './headerMobileStyle'

interface IProps {
  logout: () => void
  paths: (
    | { value: string; isRegex: boolean }
    | { value: RegExp; isRegex: boolean }
  )[]
  imgs: string[]
}

const HeaderMobile: FC<IProps> = ({ paths, imgs, logout }) => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <MenuDrawer {...{ open, setOpen, paths, imgs, logout }} />
      <MenuIcon src={menuIcon} alt="Menu Icon" onClick={() => setOpen(true)} />
      <Logo />
    </Container>
  )
}

export default HeaderMobile
