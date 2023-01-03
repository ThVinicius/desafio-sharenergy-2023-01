import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-y: auto;
`

const Image = styled.img`
  width: 600px;
  height: 600px;
`

export { Container, Image }
