import { Dispatch, FC, SetStateAction, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'

interface IProps {
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  loading: boolean
  dataCy: string
}

const PasswordInput: FC<IProps> = ({
  password,
  setPassword,
  loading,
  dataCy
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl required disabled={loading} data-cy={dataCy}>
      <InputLabel>Senha</InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        label="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(show => !show)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default PasswordInput
