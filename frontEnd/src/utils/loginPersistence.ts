import { Dispatch, SetStateAction } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function loginPersistence(
  token: string | null,
  setToken: Dispatch<SetStateAction<string | null>>,
  navigate: NavigateFunction
) {
  const stringfyToken = localStorage.getItem('token')

  let storageToken: string | null = null

  if (token === null && stringfyToken !== null) {
    storageToken = JSON.parse(stringfyToken)

    setToken(storageToken)
  }

  if (token === null && storageToken === null) {
    toast.error('É necessário estar logado para acessar essa rota!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

    return navigate('/')
  }

  return token || storageToken
}
