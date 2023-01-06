import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePath from '../../../hooks/usePath'
import { Itens, BoxItens } from './menuItensStyle'

interface IProps {
  item: string
  path:
    | { value: string; isRegex: boolean }
    | { value: RegExp; isRegex: boolean }
  image: string
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const MenuItens: FC<IProps> = ({ item, path, image, setOpen }) => {
  const { isPath } = usePath([path])
  const [color, setColor] = useState('#000')
  const navigate = useNavigate()

  useEffect(() => {
    if (isPath) setColor('#00a2a2')
    else setColor('#000')
  }, [isPath])

  const redirect = () => {
    if (setOpen) setOpen(false)

    navigate(path.value as string)
  }

  return (
    <BoxItens onClick={redirect}>
      <Itens color={color}>{item}</Itens>
      <img src={image} alt="Images do menu" />
    </BoxItens>
  )
}

export default MenuItens
