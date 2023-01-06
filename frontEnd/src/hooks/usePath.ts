import { useLocation } from 'react-router-dom'

type IPaths = { value: string | RegExp; isRegex: boolean }[]

export default function usePath(paths: IPaths) {
  let isPath = false

  const { pathname } = useLocation()

  for (let i = 0; i < paths.length; i++) {
    let findPath = false

    if (paths[i].isRegex) {
      const regex = paths[i].value as RegExp

      findPath = regex.test(pathname)
    } else {
      findPath = paths.some(path => path.value === pathname.toLowerCase())
    }

    if (findPath) {
      isPath = true
      break
    }
  }

  return { isPath }
}
