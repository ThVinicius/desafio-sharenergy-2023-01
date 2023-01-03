import { FC } from 'react'
import AlignCenterContainer from '../../containers/alignCenter/AlignCenter'
import Content from './content/Content'

const Cats: FC = () => {
  return (
    <AlignCenterContainer calcHeight="80px">
      <Content />
    </AlignCenterContainer>
  )
}

export default Cats
