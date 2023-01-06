import { ChangeEventHandler, FC } from 'react'
import FormControl from '@mui/material/FormControl/FormControl'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput'

interface IProps {
  type?: string
  focus?: boolean
  disabled?: boolean
  label: string
  value: string
  onChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined
}

const Input: FC<IProps> = ({
  type,
  focus,
  disabled,
  label,
  value,
  onChange
}) => {
  return (
    <FormControl>
      <InputLabel required>{label}</InputLabel>
      <OutlinedInput
        type={type || 'text'}
        autoFocus={focus}
        disabled={disabled}
        required
        label={label}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  )
}

export default Input
