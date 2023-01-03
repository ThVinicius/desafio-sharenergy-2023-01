import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useToken } from '../../context/useToken'
import { IUser } from '../../types/User'
import loginPersistence from '../../utils/loginPersistence'

export default function useGetAllUsers() {
  const navigate = useNavigate()
  const { token: tokenContext, setToken } = useToken()
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null)
  const [loadingAllUsers, setLoadingAllUsers] = useState(true)

  useEffect(() => {
    const token = loginPersistence(tokenContext, setToken, navigate)

    const URL = `${import.meta.env.VITE_BASE_URL}/random-users`

    const config = { headers: { authorization: `Bearer ${token}` } }

    const promise = axios.get(URL, config)

    promise
      .then(({ data }) => setAllUsers(data))
      .finally(() => setLoadingAllUsers(false))
  }, [])

  return { allUsers, loadingAllUsers }
}
