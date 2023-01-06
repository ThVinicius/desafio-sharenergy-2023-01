import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  font: normal 700 20px 'Lexend Deca', sans-serif;
  color: red;
  gap: 5px;
`

export { Container, Box }
