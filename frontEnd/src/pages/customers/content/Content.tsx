import { FC } from 'react'
import useGetAllCustomers from '../../../hooks/api/useGetAllCustomers'
import CustomerTemplate from '../customerTemplate/CustomerTemplate'
import { Container } from './contentStyle'

const Content: FC = () => {
  const { customers, setCustomers, loadingGetAllCustomers } =
    useGetAllCustomers()

  return (
    <Container>
      {customers?.map((customer, index) => (
        <CustomerTemplate
          {...customer}
          setCustomers={setCustomers}
          key={index}
        />
      ))}
    </Container>
  )
}

export default Content
