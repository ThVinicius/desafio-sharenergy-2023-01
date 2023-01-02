import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import { Container } from './filterStyles'

interface IProps {
  page: number
  loadingAllUsers: boolean
  select: 'name' | 'username' | 'email'
  setSelect: Dispatch<SetStateAction<'name' | 'username' | 'email'>>
  filter: string
  setFilter: Dispatch<SetStateAction<string>>
}

const Filter: FC<IProps> = ({
  page,
  loadingAllUsers,
  select,
  setSelect,
  filter,
  setFilter
}) => {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef) divRef.current!.scrollIntoView({ behavior: 'smooth' })
  }, [page])

  return (
    <Container ref={divRef}>
      <FormControl sx={{ width: '150px' }}>
        <InputLabel>Filtrar por:</InputLabel>
        <Select
          label="Filtrar por:"
          value={select}
          onChange={e =>
            setSelect(e.target.value as 'name' | 'username' | 'email')
          }
        >
          <MenuItem value="name">Nome</MenuItem>
          <MenuItem value="username">Username</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Filtrar"
        disabled={loadingAllUsers}
        value={filter}
        onChange={e => setFilter(e.target.value)}
        sx={{ width: '70%' }}
      />
    </Container>
  )
}

export default Filter
