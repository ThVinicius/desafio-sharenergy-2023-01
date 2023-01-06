import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ICustomer } from '../../types/Customers'
import usePersistence from '../usePersistence'

export default function useGetCustomerById(id: string) {
  const [customer, setCustomer] = useState<ICustomer | null>(null)
  const [loadingCustomerById, setLoadingCustomerById] = useState(true)
  const { loginPersistence } = usePersistence()
  const navigate = useNavigate()

  useEffect(() => {
    const token = loginPersistence()

    if (typeof token === 'string') {
      const URL = `${import.meta.env.VITE_BASE_URL}/customers/${id}`

      const config = { headers: { authorization: `Bearer ${token}` } }

      const promise = axios.get(URL, config)

      promise
        .then(({ data }) => setCustomer(data))
        .catch(({ response }) => {
          let errorRender: string

          switch (response.status) {
            case 404:
              errorRender = response.data
              break

            default:
              errorRender = 'Ocorreu um erro inesperado!, tente mais tarde'
              break
          }

          toast.error(errorRender, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          })

          navigate('/customers')
        })
        .finally(() => setLoadingCustomerById(false))
    }
  }, [])

  return { customer, loadingCustomerById }
}
