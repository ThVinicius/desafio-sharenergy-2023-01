import {
  Dispatch,
  FC,
  FormEvent,
  RefObject,
  SetStateAction,
  useRef,
  useState
} from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Container } from './formStyle'
import Button from '@mui/material/Button'
import Card from '../../../containers/card/Card'
import { options } from './inputOptions'
import useWindowResize from '../../../hooks/useWindowResize'

interface IProps {
  setURL: Dispatch<SetStateAction<string>>
  imgRef: RefObject<HTMLImageElement>
}

const Form: FC<IProps> = ({ setURL, imgRef }) => {
  const [statusCode, setStatusCode] = useState('200')
  const formRef = useRef<HTMLFormElement>(null)
  const { width } = useWindowResize()

  const submit = (event: FormEvent) => {
    event.preventDefault()

    setURL(`https://http.cat/${statusCode}.jpg`)

    imgRef.current?.scrollIntoView()
  }

  return (
    <Card padding="20px" width={width <= 500 ? '95%' : undefined}>
      <Container onSubmit={submit} ref={formRef}>
        <Autocomplete
          sx={{ width: '80%' }}
          value={statusCode}
          onChange={(e, newValue) => setStatusCode(newValue!)}
          autoSelect
          freeSolo
          options={options.map(option => option.status)}
          renderInput={params => (
            <TextField
              {...params}
              label="Status Code"
              InputProps={{
                ...params.InputProps
              }}
            />
          )}
        />
        <Button variant="contained" type="submit">
          Buscar
        </Button>
      </Container>
    </Card>
  )
}

export default Form
