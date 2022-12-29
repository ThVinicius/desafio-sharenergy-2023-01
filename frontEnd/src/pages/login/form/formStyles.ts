import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.h1`
  text-align: center;
  font: normal 400 40px 'Lexend Deca', sans-serif;
`

const Logo = styled.img`
  width: auto;
  height: 30px;
  margin-bottom: 50px;
`

export { Container, Label, Logo }
