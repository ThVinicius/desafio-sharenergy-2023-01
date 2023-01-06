import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useToken } from '../context/useToken'

export default function usePersistence() {
  const { token, setToken } = useToken()
  const navigate = useNavigate()

  const storageToken = useMemo(() => {
    let storageToken: string | null = null

    const stringfyToken = localStorage.getItem('token')

    if (token === null && stringfyToken !== null) {
      storageToken = JSON.parse(stringfyToken)

      setToken(storageToken)

      return storageToken
    }
  }, [])

  const authPersistence = () => {
    // const stringfyToken = localStorage.getItem('token')

    // let storageToken: string | null = null

    // if (token === null && stringfyToken !== null) {
    //   storageToken = JSON.parse(stringfyToken)

    //   setToken(storageToken)
    // }

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

  const loginPersistence = () => {
    if (token || storageToken) navigate('/users')
  }

  return { authPersistence, loginPersistence }
}
