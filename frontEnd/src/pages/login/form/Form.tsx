import { FC, FormEvent, useState } from 'react'
import { Container, Label, Logo } from './formStyles'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import SendIcon from '@mui/icons-material/Send'
import Card from '../../../containers/card/Card'
import PasswordInput from '../../../components/passwordInput/PasswordInput'
import useSignIn from '../../../hooks/api/useSignIn'

const Form: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const { fetch } = useSignIn()

  const submit = (event: FormEvent) => {
    event.preventDefault()

    if (loading) return

    fetch({ username, password, check }, setLoading)
  }

  return (
    <Card>
      <Label>Desafio</Label>
      <Logo
        src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
        alt="logo shareenergy"
      />
      <Container onSubmit={submit}>
        <TextField
          label="Usuário"
          required
          disabled={loading}
          autoFocus={true}
          value={username}
          onChange={e => setUsername(e.target.value)}
          data-cy="input username"
        />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          loading={loading}
          dataCy="input password"
        />
        <FormControlLabel
          data-cy="remember me"
          control={
            <Checkbox
              disabled={loading}
              value={check}
              onChange={e => setCheck(e.target.checked)}
            />
          }
          label="Remember me"
        />
        <LoadingButton
          type="submit"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          data-cy="submit"
          style={{
            backgroundColor: '#3f51b5',
            color: '#fff',
            marginTop: '10px'
          }}
        >
          Entrar
        </LoadingButton>
      </Container>
    </Card>
  )
}

export default Form
