import { FC, useEffect } from 'react'
import AppContainer from '../../containers/alignCenter/AlignCenter'
import usePersistence from '../../hooks/usePersistence'
import Form from './form/Form'

const Login: FC = () => {
  const { loginPersistence } = usePersistence()

  useEffect(() => loginPersistence(), [])

  return (
    <AppContainer>
      <Form />
    </AppContainer>
  )
}

export default Login
