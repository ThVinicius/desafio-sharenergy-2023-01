import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useGetDogs() {
  const [dog, setDog] = useState({ url: '', extension: '' })
  const [loadingGetDog, setLoadingGetDog] = useState(false)

  const getRandomDog = () => {
    setLoadingGetDog(true)

    const URL = `https://random.dog/woof.json`

    const promise = axios.get(URL)

    promise
      .then(({ data }) => {
        const { url } = data as { url: string }

        const regex = /[^.]+$/

        const extension = url.match(regex)![0]

        setDog({ url, extension })
      })
      .finally(() => setLoadingGetDog(false))
  }

  useEffect(() => getRandomDog(), [])

  return { getRandomDog, dog, loadingGetDog }
}
