import { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ICustomer } from '../../types/Customers'
import usePersistence from '../usePersistence'

type IInputs = Dispatch<SetStateAction<string>>[]

export default function useAddCustomers(inputsClear: IInputs) {
  const [loadingAddCustomers, setLoadingAddCustomers] = useState(false)
  const { authPersistence } = usePersistence()

  const addCustomers = (customer: ICustomer) => {
    const token = authPersistence()

    if (typeof token === 'string') {
      setLoadingAddCustomers(true)

      const toastId = toast.loading('Requisição em andamento...')

      const URL = `${import.meta.env.VITE_BASE_URL}/customers`

      const config = { headers: { authorization: `Bearer ${token}` } }

      const promise = axios.post(URL, customer, config)

      promise
        .then(() => {
          inputsClear.map(input => input(''))

          toast.update(toastId, {
            render: 'Cliente cadastrado com sucesso! 👌',
            type: 'success',
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true
          })
        })
        .catch(({ response }) => {
          const data = response.data as string | string[]

          let renderToast = ''

          switch (response.status) {
            case 400:
            case 409:
              if (typeof data === 'string') renderToast = data
              else data.map((err: string) => (renderToast += err + '; '))

              break

            default:
              renderToast = 'Ocorreu um erro inesperado, tente mais tarde!'
              break
          }

          toast.update(toastId, {
            render: `${renderToast} 🤯`,
            type: 'error',
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true
          })
        })
        .finally(() => setLoadingAddCustomers(false))
    }
  }

  return { addCustomers, loadingAddCustomers }
}
