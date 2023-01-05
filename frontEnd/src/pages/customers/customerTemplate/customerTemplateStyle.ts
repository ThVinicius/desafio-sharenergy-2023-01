import styled from 'styled-components'

const Container = styled.div`
  width: 350px;
  padding: 20px 10px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 2px 1px 7px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font: normal 700 20px 'Lexend Deca', sans-serif;
  }

  h6 {
    font: normal 300 20px 'Lexend Deca', sans-serif;
  }
`

const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export { Container, Info, ButtonsBox }
