import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function useGetAddressByCep(cep: string) {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  useEffect(() => {
    if (cep.length === 9) {
      const parseCep = cep.replace(/\D/g, '')

      const URL = `https://viacep.com.br/ws/${parseCep}/json/`

      const promise = axios.get(URL)

      promise
        .then(({ data }) => {
          if (data.erro) {
            const errorRender =
              'CEP inválido!, digite um CEP válido para prosseguir com o cadastro'

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
          }

          setState(data.uf)

          setCity(data.localidade)
        })
        .catch(res => console.log(res))
    } else {
      setState('')

      setCity('')
    }
  }, [cep])

  return { state, city }
}
