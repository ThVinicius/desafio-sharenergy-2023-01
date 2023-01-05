import styled from 'styled-components'

const Container = styled.form`
  width: 75%;
  height: 100%;
  padding: 20px;
`

const InputsBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

const Label = styled.h1`
  font: normal 500 25px 'Lexend Deca', sans-serif;
  text-align: center;
  margin-bottom: 40px;
`

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export { Container, InputsBox, Label, BtnBox }
