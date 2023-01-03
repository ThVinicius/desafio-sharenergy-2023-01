import { FC } from 'react'
import Button from '@mui/material/Button'
import PetsIcon from '@mui/icons-material/Pets'
import useGetDogs from '../../../hooks/api/randomDog/useGetDogs'
import RenderDog from '../renderDog/RenderDog'
import { Container } from './contentStyle'

const Content: FC = () => {
  const { getRandomDog, dog, loadingGetDog } = useGetDogs()

  return (
    <Container>
      <Button onClick={getRandomDog} variant="contained" endIcon={<PetsIcon />}>
        Atualizar
      </Button>
      <RenderDog {...{ dog, loadingGetDog }} />
    </Container>
  )
}

export default Content
