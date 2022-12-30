import { useLocation } from 'react-router-dom'

export default function usePath(paths: string[]) {
  let isPath = false

  const { pathname } = useLocation()

  if (paths.some(path => path === pathname.toLowerCase())) isPath = true

  return { isPath }
}
