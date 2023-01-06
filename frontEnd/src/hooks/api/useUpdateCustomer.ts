import { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ICustomer } from './../../types/Customers'
import usePersistence from '../usePersistence'

type IUpdateCustomer = Omit<ICustomer, 'name' | 'cpf' | 'email'>

type ISetEdit = Dispatch<SetStateAction<boolean>>

type IInputs = Dispatch<SetStateAction<{ value: string; newValue: string }>>[]

function useUpdateCustomer(setEdit: ISetEdit, inputs: IInputs) {
  const [loadingUpdateCustomer, setLoadingUpdateCustomer] = useState(false)
  const { authPersistence } = usePersistence()

  const update = (customer: IUpdateCustomer) => {
    const token = authPersistence()

    if (typeof token === 'string') {
      setLoadingUpdateCustomer(true)

      const URL = `${import.meta.env.VITE_BASE_URL}/customers`

      const config = { headers: { authorization: `Bearer ${token}` } }

      const promise = axios.patch(URL, customer, config)

      promise
        .then(() => {
          inputs.map(setInput =>
            setInput(prev => ({ ...prev, value: prev.newValue }))
          )

          setEdit(false)
        })
        .catch(({ response }) => {
          const data = response.data as string | string[]

          let errorRender = ''

          switch (response.status) {
            case 400:
            case 404:
            case 409:
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
        })
        .finally(() => setLoadingUpdateCustomer(false))
    }
  }

  return { update, loadingUpdateCustomer }
}

export default useUpdateCustomer
