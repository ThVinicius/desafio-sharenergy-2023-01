import { FC } from 'react'
import UserTemplate from './UserTemplate'
import { IUser } from '../../../types/User'
import { UsersContainer } from './userTemplateStyle'

interface IProps {
  usersResult: IUser[] | null
}

const UsersTemplateContainer: FC<IProps> = ({ usersResult }) => {
  return (
    <UsersContainer>
      {usersResult?.map((user, index) => (
        <UserTemplate {...user} key={index} />
      ))}
    </UsersContainer>
  )
}

export default UsersTemplateContainer
