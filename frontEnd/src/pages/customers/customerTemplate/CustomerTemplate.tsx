import { Dispatch, FC, SetStateAction, useState } from 'react'
import Button from '@mui/material/Button'
import { ICustomer } from '../../../types/Customers'
import {
  Address,
  AddressBox,
  ButtonsBox,
  Container,
  Info
} from './CustomerTemplateStyle'
import DeleteModal from '../deleteModal/DeleteModal'

interface IProps extends ICustomer {
  setCustomers: Dispatch<SetStateAction<ICustomer[] | null>>
}

const CustomerTemplate: FC<IProps> = props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Container>
        <ButtonsBox>
          <Button variant="contained">Atualizar</Button>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            color="error"
          >
            Deletar
          </Button>
        </ButtonsBox>
        <Info>
          <h5>Nome</h5>
          <h6>{props.name}</h6>
        </Info>
        <Info>
          <h5>Email</h5>
          <h6>{props.email}</h6>
        </Info>
        <Info>
          <h5>Telefone</h5>
          <h6>{props.fone}</h6>
        </Info>
        <Info>
          <h5>CPF</h5>
          <h6>{props.cpf}</h6>
        </Info>
        <Info>
          <h5>Endereço</h5>
          <Address>
            <AddressBox>
              <h5>Estado</h5>
              <h6>{props.address.state}</h6>
            </AddressBox>
            <AddressBox>
              <h5>Cidade</h5>
              <h6>{props.address.city}</h6>
            </AddressBox>
            <AddressBox>
              <h5>Bairro</h5>
              <h6>{props.address.district}</h6>
            </AddressBox>
            <AddressBox>
              <h5>Rua</h5>
              <h6>{props.address.street}</h6>
            </AddressBox>
            <AddressBox>
              <h5>Número</h5>
              <h6>{props.address.number}</h6>
            </AddressBox>
            <AddressBox>
              <h5>CEP</h5>
              <h6>{props.address.cep}</h6>
            </AddressBox>
          </Address>
        </Info>
      </Container>
      <DeleteModal
        {...{
          open,
          setOpen,
          name: props.name,
          _id: props._id,
          setCustomers: props.setCustomers
        }}
      />
    </>
  )
}

export default CustomerTemplate
