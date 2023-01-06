import { FC } from 'react'
import { useParams } from 'react-router-dom'
import AlignCenterContainer from '../../containers/alignCenter/AlignCenter'
import Content from './content/Content'

const ViewCustomer: FC = () => {
  const { customerId } = useParams()

  return (
    <AlignCenterContainer calcHeight="80px">
      <Content />
    </AlignCenterContainer>
  )
}

export default ViewCustomer
