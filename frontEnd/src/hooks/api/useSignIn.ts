import { Dispatch, SetStateAction } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useToken } from '../../context/useToken'

interface IPayload {
  username: string
  password: string
  check: boolean
}

type ILoading = Dispatch<SetStateAction<boolean>>

export default function useSignIn() {
  const navigate = useNavigate()
  const { setToken } = useToken()

  const fetch = (payload: IPayload, setLoading: ILoading) => {
    const { username, password, check } = payload

    const BASE_URL = import.meta.env.VITE_BASE_URL

    const URL = `${BASE_URL}/sign-in`

    const promise = axios.post(URL, { username, password })

    const id = toast.loading('Requisição em andamento...')

    promise
      .then(({ data }: { data: { token: string } }) => {
        const { token } = data

        if (check) {
          const tokenStringfy = JSON.stringify(token)

          localStorage.setItem('token', tokenStringfy)
        }

        setToken(token)

        toast.update(id, {
          render: 'Login efetuado com sucesso! 👌',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true
        })

        navigate('/users')
      })
      .catch(({ response }) => {
        let renderToast: string

        switch (response?.status) {
          case 401:
            renderToast = response.data

            break

          default:
            renderToast = 'Erro inesperado, tente mais tarde'
            break
        }

        toast.update(id, {
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
      .finally(() => setLoading(false))
  }

  return { fetch }
}
