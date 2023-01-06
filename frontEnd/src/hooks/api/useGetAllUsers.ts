import { useState, useEffect } from 'react'
import axios from 'axios'
import { IUser } from '../../types/User'
import usePersistence from '../usePersistence'

export default function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null)
  const [loadingAllUsers, setLoadingAllUsers] = useState(true)
  const { authPersistence } = usePersistence()

  useEffect(() => {
    const token = authPersistence()

    if (typeof token === 'string') {
      const URL = `${import.meta.env.VITE_BASE_URL}/random-users`

      const config = { headers: { authorization: `Bearer ${token}` } }

      const promise = axios.get(URL, config)

      promise
        .then(({ data }) => setAllUsers(data))
        .finally(() => setLoadingAllUsers(false))
    }
  }, [])

  return { allUsers, loadingAllUsers }
}
