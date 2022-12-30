import {
  useState,
  useContext,
  createContext,
  FC,
  Dispatch,
  SetStateAction
} from 'react'

interface IProps {
  children: JSX.Element[]
}

type ContextType = {
  token: string | null
  setToken: Dispatch<SetStateAction<string | null>>
}

const TokenContext = createContext<ContextType>({
  token: null,
  setToken: () => {}
})

const TokenProvider: FC<IProps> = ({ children }) => {
  const [token, setToken] = useState<null | string>(null)

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}

const useToken = () => useContext(TokenContext)

export { TokenProvider, useToken }
