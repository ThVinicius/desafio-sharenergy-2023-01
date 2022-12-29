import { Dispatch, SetStateAction } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

interface IPayload {
  username: string
  password: string
  check: boolean
}

type ILoading = Dispatch<SetStateAction<boolean>>

export default function signIn(payload: IPayload, setLoading: ILoading) {
  setLoading(true)

  const BASE_URL = import.meta.env.VITE_BASE_URL

  const URL = `${BASE_URL}/sign-in`

  const promise = axios.post(URL, payload)

  const id = toast.loading('Promise is pending')

  promise
    .then(({ data }) => {
      if (payload.check) {
        const tokenStringfy = JSON.stringify(data.token)

        localStorage.setItem('token', tokenStringfy)
      }

      toast.update(id, {
        render: 'Login efetuado com sucesso! 👌',
        type: 'success',
        isLoading: false,
        autoClose: 5000
      })
    })
    .catch(({ response }) => {
      console.log(response)

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
        autoClose: 5000
      })
    })
    .finally(() => setLoading(false))
}
