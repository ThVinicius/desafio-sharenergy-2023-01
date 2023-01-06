import { useEffect, useState } from 'react'
import axios from 'axios'
import usePersistence from '../usePersistence'
import { ICustomer } from '../../types/Customers'

export default function useGetAllCustomers() {
  const [customers, setCustomers] = useState<ICustomer[] | null>(null)
  const [loadingGetAllCustomers, setLoadingGetAllCustomers] = useState(true)
  const { authPersistence } = usePersistence()

  useEffect(() => {
    const token = authPersistence()

    if (typeof token === 'string') {
      const URL = `${import.meta.env.VITE_BASE_URL}/customers`

      const config = { headers: { authorization: `Bearer ${token}` } }

      const promise = axios.get(URL, config)

      promise
        .then(({ data }) => setCustomers(data))
        .finally(() => setLoadingGetAllCustomers(false))
    }
  }, [])

  return { customers, setCustomers, loadingGetAllCustomers }
}
