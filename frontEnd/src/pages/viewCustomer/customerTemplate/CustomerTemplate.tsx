import { FC, useState } from 'react'
import DeleteModal from '../../../components/deleteModal/DeleteModal'
import { ICustomer } from '../../../types/Customers'
import EditField from './EditField'
import Buttons from './Buttons'
import useGetAddressByCep from '../../../hooks/api/viaCep/useGetAddressByCep'
import { phoneMaskObjOnChange } from '../../../utils/inputMasks/phoneMask'
import { cepMaskObjOnChange } from '../../../utils/inputMasks/cepMask'
import { Address, AddressBox, Container, Info } from './customerTemplateStyle'
import useUpdateCustomer from '../../../hooks/api/useUpdateCustomer'

const CustomerTemplate: FC<ICustomer> = props => {
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [phone, setPhone] = useState({
    value: props.phone,
    newValue: props.phone
  })
  const [email, setEmail] = useState({
    value: props.email,
    newValue: props.email
  })
  const [cep, setCep] = useState({
    value: props.address.cep,
    newValue: props.address.cep
  })
  const { city, state } = useGetAddressByCep(cep.newValue)
  const [street, setStreet] = useState({
    value: props.address.street,
    newValue: props.address.street
  })
  const [number, setNumber] = useState({
    value: props.address.number,
    newValue: props.address.number
  })
  const [district, setDistrict] = useState({
    value: props.address.district,
    newValue: props.address.district
  })
  const { update, loadingUpdateCustomer } = useUpdateCustomer(setEdit, [
    setEmail,
    setPhone,
    setCep,
    setStreet,
    setNumber,
    setDistrict
  ])

  const cancel = () => {
    if (loadingUpdateCustomer) return

    const inputs = [
      setEmail,
      setPhone,
      setCep,
      setStreet,
      setNumber,
      setDistrict
    ]

    inputs.map(setInput =>
      setInput(prev => ({ ...prev, newValue: prev.value }))
    )

    setEdit(false)
  }

  const save = () => {
    const customer = {
      id: props.id!,
      email: email.newValue,
      phone: phone.newValue,
      address: {
        cep: cep.newValue,
        state,
        city,
        street: street.newValue,
        number: number.newValue,
        district: district.newValue
      }
    }

    update(customer)
  }

  return (
    <Container>
      <Buttons {...{ edit, setEdit, setOpen, save, cancel }} />
      <Info>
        <h5>Nome</h5>
        <h6>{props.name}</h6>
      </Info>
      <Info>
        <h5>CPF</h5>
        <h6>{props.cpf}</h6>
      </Info>
      <Info>
        <h5>Email</h5>
        <EditField
          edit={edit}
          label="Email"
          type="email"
          disabled={loadingUpdateCustomer}
          value={email.newValue}
          onChange={e =>
            setEmail(prev => ({ ...prev, newValue: e.target.value }))
          }
          dataCy="input-email"
        />
      </Info>
      <Info>
        <h5>Telefone</h5>
        <EditField
          edit={edit}
          label="Telefone"
          disabled={loadingUpdateCustomer}
          value={phone.newValue}
          onChange={e => phoneMaskObjOnChange(e, setPhone)}
        />
      </Info>
      <Info>
        <h5>Endereço</h5>
        <Address>
          <AddressBox>
            <h5>CEP</h5>
            <EditField
              edit={edit}
              label="CEP"
              disabled={loadingUpdateCustomer}
              value={cep.newValue}
              onChange={e => cepMaskObjOnChange(e, setCep)}
            />
          </AddressBox>
          <AddressBox>
            <h5>Estado</h5>
            <EditField
              edit={edit}
              disabled={true}
              label="Estado"
              value={state}
            />
          </AddressBox>
          <AddressBox>
            <h5>Cidade</h5>
            <EditField
              edit={edit}
              disabled={true}
              label="Cidade"
              value={city}
            />
          </AddressBox>
          <AddressBox>
            <h5>Rua</h5>
            <EditField
              edit={edit}
              disabled={loadingUpdateCustomer}
              label="Rua"
              value={street.newValue}
              onChange={e =>
                setStreet(prev => ({ ...prev, newValue: e.target.value }))
              }
            />
          </AddressBox>
          <AddressBox>
            <h5>Número</h5>
            <EditField
              edit={edit}
              disabled={loadingUpdateCustomer}
              label="Número"
              value={number.newValue}
              onChange={e =>
                setNumber(prev => ({ ...prev, newValue: e.target.value }))
              }
            />
          </AddressBox>
          <AddressBox>
            <h5>Bairro</h5>
            <EditField
              edit={edit}
              disabled={loadingUpdateCustomer}
              label="Bairro"
              value={district.newValue}
              onChange={e =>
                setDistrict(prev => ({ ...prev, newValue: e.target.value }))
              }
            />
          </AddressBox>
        </Address>
      </Info>
      <DeleteModal
        {...{
          open,
          setOpen,
          name: props.name,
          id: props.id!
        }}
      />
    </Container>
  )
}

export default CustomerTemplate
