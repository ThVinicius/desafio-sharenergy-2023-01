import { FC } from 'react'
import usePath from '../../../hooks/usePath'
import useLogout from '../../../hooks/useLogout'
import useWindowResize from '../../../hooks/useWindowResize'
import user from '../../../assets/images/man.png'
import dog from '../../../assets/images/dog.png'
import cat from '../../../assets/images/cat.png'
import customer from '../../../assets/images/service.png'
import logoutIcon from '../../../assets/images/logout.png'
import HeaderDesktop from '../desktop/HeaderDesktop'
import HeaderMobile from '../mobile/HeaderMobile'
import { Container } from './headerStyles'

const imgs = [user, cat, dog, customer, logoutIcon]

const paths = [
  { value: '/users', isRegex: false },
  { value: '/cats', isRegex: false },
  { value: '/dogs', isRegex: false },
  { value: '/customers', isRegex: false },
  { value: '/customers/add', isRegex: false },
  { value: /[/]customers[/]view[/].+/, isRegex: true }
]

const Header: FC = () => {
  const { isPath } = usePath(paths)
  const { logout } = useLogout()
  const { width } = useWindowResize()

  return (
    <>
      {isPath && (
        <Container>
          {width >= 940 ? (
            <HeaderDesktop {...{ logout, paths, imgs }} />
          ) : (
            <HeaderMobile {...{ logout, paths, imgs }} />
          )}
        </Container>
      )}
    </>
  )
}

export default Header
