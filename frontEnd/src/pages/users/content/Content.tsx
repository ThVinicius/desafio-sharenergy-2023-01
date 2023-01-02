import { FC, useState } from 'react'
import useGetAllUsers from '../../../hooks/api/useGetAllUsers'
import useGetUsersPag from '../../../hooks/randomUser/useGetUsersPag'
import useSearch from '../../../hooks/useSearch'
import Filter from '../filter/Filter'
import SkeletonTemplate from '../userTemplate/SkeletonTemplate'
import UsersTemplateContainer from '../userTemplate/UsersTemplateContainer'
import PagComponent from './PagComponent'
import { Container } from './contentStyle'

const Content: FC = () => {
  const [page, setPage] = useState(1)
  const [select, setSelect] = useState<'name' | 'username' | 'email'>('name')
  const [filter, setFilter] = useState('')
  const { pagUsers, loadingPagUsers } = useGetUsersPag(page)
  const { allUsers, loadingAllUsers } = useGetAllUsers()
  const { usersResult } = useSearch(pagUsers, allUsers, select, filter)

  return (
    <Container>
      <Filter
        {...{ page, loadingAllUsers, select, setSelect, filter, setFilter }}
      />
      {!loadingPagUsers ? (
        <>
          <UsersTemplateContainer {...{ usersResult }} />
          {filter.length === 0 && <PagComponent {...{ page, setPage }} />}
        </>
      ) : (
        <SkeletonTemplate />
      )}
    </Container>
  )
}

export default Content
