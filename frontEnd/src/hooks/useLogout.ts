import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useToken } from '../context/useToken'

export default function useLogout() {
  const { setToken } = useToken()
  const navigate = useNavigate()

  const logout = () => {
    setToken(null)

    localStorage.removeItem('token')

    toast.success('Logout realizado com sucesso!')

    navigate('/')
  }

  return { logout }
}
