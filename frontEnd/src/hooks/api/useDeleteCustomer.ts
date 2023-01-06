import { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ICustomer } from '../../types/Customers'
import usePersistence from '../usePersistence'
import { toast } from 'react-toastify'

type ISetCustomer = Dispatch<SetStateAction<ICustomer[] | null>>

type ISetOpen = Dispatch<SetStateAction<boolean>>

export default function useDeleteCustomer(setOpen: ISetOpen) {
  const [loadingDelCustomer, setLoadingDelCustomer] = useState(true)
  const { loginPersistence } = usePersistence()
  const navigate = useNavigate()

  const deleteCustomer = (id: string, setCustomers?: ISetCustomer) => {
    const token = loginPersistence()

    if (typeof token === 'string') {
      const toastId = toast.loading('Requisição em andamento...')

      const URL = `${import.meta.env.VITE_BASE_URL}/customers/${id}`

      const config = { headers: { authorization: `Bearer ${token}` } }

      const promise = axios.delete(URL, config)

      promise
        .then(() => {
          if (setCustomers) {
            setCustomers(prev => prev!.filter(customer => customer._id !== id))
          }

          toast.update(toastId, {
            render: 'Cliente deletado com sucesso! 👌',
            type: 'success',
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true
          })

          setOpen(false)

          if (!setCustomers) navigate('/customers')
        })
        .catch(({ response }) => {
          let renderToast: string

          switch (response.status) {
            case 404:
              renderToast = response.data
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
        .finally(() => setLoadingDelCustomer(false))
    }
  }

  return { deleteCustomer, loadingDelCustomer }
}
