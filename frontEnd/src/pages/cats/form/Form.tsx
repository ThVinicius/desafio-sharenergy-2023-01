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

interface IProps {
  setURL: Dispatch<SetStateAction<string>>
  imgRef: RefObject<HTMLImageElement>
}

const Form: FC<IProps> = ({ setURL, imgRef }) => {
  const [statusCode, setStatusCode] = useState('200')
  const formRef = useRef<HTMLFormElement>(null)

  const submit = (event: FormEvent) => {
    event.preventDefault()

    setURL(`https://http.cat/${statusCode}.jpg`)

    imgRef.current?.scrollIntoView()
  }

  return (
    <Card padding="20px 40px">
      <Container onSubmit={submit} ref={formRef}>
        <Autocomplete
          sx={{ width: '200px' }}
          freeSolo
          value={statusCode}
          onChange={(e, value) => setStatusCode(value!)}
          options={options.map(option => option.status)}
          renderInput={params => (
            <TextField
              {...params}
              label="Status HTTP"
              InputProps={{
                ...params.InputProps,
                type: 'search'
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
