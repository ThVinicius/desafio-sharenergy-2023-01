import { FC } from 'react'
import { useParams } from 'react-router-dom'
import useGetCustomerById from '../../../hooks/api/useGetCustomerById'
import CustomerTemplate from '../customerTemplate/CustomerTemplate'
import { Container } from './contentStyle'

const Content: FC = () => {
  const { customerId } = useParams()
  const { customer, loadingCustomerById } = useGetCustomerById(customerId!)

  return (
    <Container>
      {!loadingCustomerById && <CustomerTemplate {...customer!} />}
    </Container>
  )
}

export default Content
