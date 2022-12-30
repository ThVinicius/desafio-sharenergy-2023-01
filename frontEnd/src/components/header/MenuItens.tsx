import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import usePath from '../../hooks/usePath'
import { Itens, BoxItens } from './headerStyles'

interface IProps {
  item: string
  path: string
  image: string
}

const MenuItens: FC<IProps> = ({ item, path, image }) => {
  const { isPath } = usePath([path])
  const [color, setColor] = useState('#000')

  useEffect(() => {
    if (isPath) setColor('#00a2a2')
    else setColor('#000')
  }, [isPath])

  return (
    <Link to={path}>
      <BoxItens>
        <Itens color={color}>{item}</Itens>
        <img src={image} alt="Images do menu" />
      </BoxItens>
    </Link>
  )
}

export default MenuItens
