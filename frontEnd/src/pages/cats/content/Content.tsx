import { FC, useEffect, useRef, useState } from 'react'
import usePersistence from '../../../hooks/usePersistence'
import Form from '../form/Form'
import { Container, Image } from './contentStyle'

const Content: FC = () => {
  const [URL, setURL] = useState('https://http.cat/200.jpg')
  const imgRef = useRef<HTMLImageElement>(null)
  const { loginPersistence } = usePersistence()

  useEffect(() => {
    loginPersistence()
  }, [])

  return (
    <Container>
      <Form setURL={setURL} imgRef={imgRef} />
      <Image ref={imgRef} src={URL} alt="http cat" />
    </Container>
  )
}

export default Content
