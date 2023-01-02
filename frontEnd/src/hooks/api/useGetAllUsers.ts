import { useState, useEffect } from 'react'
import axios from 'axios'
import { IUser } from '../../types/User'

export default function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null)
  const [loadingAllUsers, setLoadingAllUsers] = useState(true)

  useEffect(() => {
    const URL = `${import.meta.env.VITE_BASE_URL}/random-users`

    const promise = axios.get(URL)

    promise
      .then(({ data }) => setAllUsers(data))
      .finally(() => setLoadingAllUsers(false))
  }, [])

  return { allUsers, loadingAllUsers }
}
