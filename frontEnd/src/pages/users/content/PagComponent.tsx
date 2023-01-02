import { Dispatch, FC, SetStateAction } from 'react'
import Pagination from '@mui/material/Pagination'
import Card from '../../../containers/card/Card'

interface IProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

const PagComponent: FC<IProps> = ({ page, setPage }) => {
  return (
    <Card padding="15px 25px">
      <Pagination
        page={page}
        count={5}
        onChange={(e, value) => setPage(value)}
      />
    </Card>
  )
}

export default PagComponent
