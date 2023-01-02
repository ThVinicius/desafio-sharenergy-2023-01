import { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import { Container, AvatarBox, Info } from './userTemplateStyle'
import { IUser } from '../../../types/User'

const UserTemplate: FC<IUser> = ({ picture, name, username, email, age }) => {
  return (
    <Container>
      <AvatarBox>
        <Avatar
          src={picture}
          alt="User"
          sx={{
            width: 90,
            height: 90,
            boxShadow: '0px -4px 5px -3px rgba(0, 0, 0, 0.75)'
          }}
        />
        <h6>{name}</h6>
      </AvatarBox>
      <Info>
        <h5>Username</h5>
        <h6>{username}</h6>
      </Info>
      <Info>
        <h5>Email</h5>
        <h6>{email}</h6>
      </Info>
      <Info>
        <h5>Idade</h5>
        <h6>{age}</h6>
      </Info>
    </Container>
  )
}

export default UserTemplate
