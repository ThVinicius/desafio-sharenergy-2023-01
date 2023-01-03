import { useState, useEffect } from 'react'
import axios from 'axios'
import { IUser } from '../../../types/User'

export default function useGetUsers() {
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const URL = 'https://randomuser.me/api/?seed=desafio&results=50'

    // const URLS: string[] = []

    // for (let i = 1; i <= 5; i++) URLS.push(`${URL}&page=${i}`)

    // const promises = URLS.map(URL => axios.get(URL))

    // Promise.all(promises).then(res => console.log(res))

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

        setUsers(usersMap)
      })
      .finally(() => setLoading(false))
  }, [])

  return { users, loading }
}
