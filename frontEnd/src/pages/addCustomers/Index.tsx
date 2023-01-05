import { FC } from 'react'
import AlignCenterContainer from '../../containers/alignCenter/AlignCenter'
import Form from './form/Form'

const AddCustomers: FC = () => {
  return (
    <AlignCenterContainer calcHeight="80px">
      <Form />
    </AlignCenterContainer>
  )
}

export default AddCustomers
