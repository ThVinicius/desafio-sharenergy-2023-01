import { useLayoutEffect, useState } from 'react'
import { IUser } from '../types/User'

function useSearch(
  pagUsers: IUser[] | null,
  allUsers: IUser[] | null,
  field: 'name' | 'username' | 'email',
  input: string
) {
  const [usersResult, setUsersResult] = useState(pagUsers)

  useLayoutEffect(() => {
    if (input.length > 0) {
      const target = input.toLowerCase()

      const filterUsers = allUsers?.filter(user =>
        user[field].toLowerCase().includes(target)
      )

      if (filterUsers) setUsersResult(filterUsers)
    } else setUsersResult(pagUsers)
  }, [input, pagUsers, field])

  return { usersResult }
}

export default useSearch
