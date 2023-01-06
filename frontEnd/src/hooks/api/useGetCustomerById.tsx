import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ICustomer } from '../../types/Customers'
import usePersistence from '../usePersistence'

export default function useGetCustomerById(id: string) {
  const [customer, setCustomer] = useState<ICustomer | null>(null)
  const [loadingCustomerById, setLoadingCustomerById] = useState(true)
  const { authPersistence } = usePersistence()
  const navigate = useNavigate()

  useEffect(() => {
    const token = authPersistence()

    if (typeof token === 'string') {
      const URL = `${import.meta.env.VITE_BASE_URL}/customers/${id}`

      const config = { headers: { authorization: `Bearer ${token}` } }

      const promise = axios.get(URL, config)

      promise
        .then(({ data }) => setCustomer(data))
        .catch(({ response }) => {
          const data = response.data as string | string[]

          let errorRender = ''

          switch (response.status) {
            case 400:
            case 404:
              if (typeof data === 'string') errorRender = data
              else data.map((err: string) => (errorRender += err + '; '))

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
