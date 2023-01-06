import styled from 'styled-components'

const Container = styled.div`
  width: 40vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`

const Content = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Footer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Logout = styled.p`
  font: normal 700 18px 'Lexend', sans-serif;
  cursor: pointer;
`

export { Container, Footer, Logout, Content }
