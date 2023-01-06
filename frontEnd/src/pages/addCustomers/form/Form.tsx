import { FC, FormEvent, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Card from '../../../containers/card/Card'
import Input from '../../../components/input/Input'
import cpfMaskOnChange from '../../../utils/inputMasks/cpfMask'
import { cepMaskOnChange } from '../../../utils/inputMasks/cepMask'
import { phoneMaskOnChange } from '../../../utils/inputMasks/phoneMask'
import useGetAddressByCep from '../../../hooks/api/viaCep/useGetAddressByCep'
import useAddCustomers from '../../../hooks/api/useAddCustomers'
import { BtnBox, Container, InputsBox, Label } from './formStyle'

const Form: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const { state, city } = useGetAddressByCep(cep)
  const [district, setDistrict] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const { addCustomers, loadingAddCustomers } = useAddCustomers([
    setName,
    setEmail,
    setPhone,
    setCpf,
    setCep,
    setDistrict,
    setStreet,
    setNumber
  ])

  const submit = (event: FormEvent) => {
    event.preventDefault()

    const customer = {
      name,
      email,
      phone,
      cpf,
      address: { cep, state, city, district, street, number }
    }

    addCustomers(customer)
  }

  return (
    <Container onSubmit={submit}>
      <Card>
        <Label>Formulário para Cadastro de novos clientes</Label>
        <InputsBox>
          <Input
            label="Nome"
            disabled={loadingAddCustomers}
            focus={true}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            disabled={loadingAddCustomers}
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label="Telefone"
            disabled={loadingAddCustomers}
            value={phone}
            onChange={e => phoneMaskOnChange(e, setPhone)}
          />
          <Input
            label="CPF"
            disabled={loadingAddCustomers}
            value={cpf}
            onChange={e => cpfMaskOnChange(e, setCpf)}
          />
          <Input
            label="CEP"
            disabled={loadingAddCustomers}
            value={cep}
            onChange={e => cepMaskOnChange(e, setCep)}
          />
          <Input label="Estado" value={state} disabled={true} />
          <Input label="Cidade" value={city} disabled={true} />
          <Input
            label="Bairro"
            disabled={loadingAddCustomers}
            value={district}
            onChange={e => setDistrict(e.target.value)}
          />
          <Input
            label="Rua"
            disabled={loadingAddCustomers}
            value={street}
            onChange={e => setStreet(e.target.value)}
          />
          <Input
            label="Número"
            disabled={loadingAddCustomers}
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </InputsBox>
        <BtnBox>
          <LoadingButton
            type="submit"
            endIcon={<SendIcon />}
            loading={loadingAddCustomers}
            loadingPosition="end"
            variant="contained"
            data-cy="submit"
          >
            Cadastrar
          </LoadingButton>
        </BtnBox>
      </Card>
    </Container>
  )
}

export default Form
