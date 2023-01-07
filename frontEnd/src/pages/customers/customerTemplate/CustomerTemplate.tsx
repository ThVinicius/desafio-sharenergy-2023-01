import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { ICustomer } from '../../../types/Customers'
import { ButtonsBox, Container, Info } from './customerTemplateStyle'
import DeleteModal from '../../../components/deleteModal/DeleteModal'

interface IProps extends ICustomer {
  setCustomers: Dispatch<SetStateAction<ICustomer[] | null>>
}

const CustomerTemplate: FC<IProps> = props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Container>
        <ButtonsBox>
          <Link
            to={`/customers/view/${props._id}`}
            data-cy={`customer-email:${props.email}`}
          >
            <Button variant="contained">Vizualizar</Button>
          </Link>
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
          <h6>{props.phone}</h6>
        </Info>
      </Container>
      <DeleteModal
        {...{
          open,
          setOpen,
          name: props.name,
          _id: props._id!,
          setCustomers: props.setCustomers
        }}
      />
    </>
  )
}

export default CustomerTemplate
