import { FC } from 'react'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import useGetAllCustomers from '../../../hooks/api/useGetAllCustomers'
import CustomerTemplate from '../customerTemplate/CustomerTemplate'
import { Container, CustomersContainer } from './contentStyle'
import { Link } from 'react-router-dom'
import CustomerTemplateSkeleton from '../customerTemplate/CustomerTemplateSkeleton'

const Content: FC = () => {
  const { customers, setCustomers, loadingGetAllCustomers } =
    useGetAllCustomers()

  return (
    <Container>
      <Link to="/customers/add">
        <Button
          variant="contained"
          color="info"
          endIcon={<PersonAddAlt1Icon />}
          sx={{ width: '280px' }}
        >
          Registrar um novo cliente
        </Button>
      </Link>
      <CustomersContainer>
        {!loadingGetAllCustomers ? (
          customers?.map((customer, index) => (
            <CustomerTemplate
              {...customer}
              setCustomers={setCustomers}
              key={index}
            />
          ))
        ) : (
          <CustomerTemplateSkeleton />
        )}
      </CustomersContainer>
    </Container>
  )
}

export default Content
