import { FC, useEffect, useRef, useState } from 'react'
import { Container, Image, Video } from './renderDogStyle'
import SkeletonDog from './SkeletonDog'

interface IProps {
  dog: { url: string; extension: string }
  loadingGetDog: boolean
}

const RenderDog: FC<IProps> = ({ dog, loadingGetDog }) => {
  const [render, setRender] = useState<JSX.Element>()
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    switch (dog.extension) {
      case 'mp4':
      case 'webm':
        setRender(<Video autoPlay loop src={dog.url} key={dog.url} />)

        break

      default:
        setRender(<Image src={dog.url} alt="random dog" key={dog.url} />)

        break
    }

    divRef.current?.scrollIntoView()
  }, [dog])

  return !loadingGetDog ? (
    <Container ref={divRef}>{render}</Container>
  ) : (
    <SkeletonDog />
  )
}

export default RenderDog
