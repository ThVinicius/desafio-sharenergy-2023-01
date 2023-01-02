import { useState, useEffect } from 'react'
import axios from 'axios'
import { IUser } from '../../types/User'

export default function useGetUsersPag(page: number) {
  const [pagUsers, setPagUsers] = useState<IUser[] | null>(null)
  const [loadingPagUsers, setLoadingPagUsers] = useState(false)

  useEffect(() => {
    setLoadingPagUsers(true)

    const URL = `https://randomuser.me/api/?seed=desafio&results=10&page=${page}`

    const promise = axios.get(URL)

    promise
      .then(({ data }) => {
        const usersMap = data.results.map((user: any) => {
          const { email, name, picture, dob, login } = user

          return {
            name: `${name.first} ${name.last}`,
            username: login.username,
            email,
            age: dob.age,
            picture: picture.large
          }
        })

        setPagUsers(usersMap)
      })
      .finally(() => setLoadingPagUsers(false))
  }, [page])

  return { pagUsers, loadingPagUsers }
}
