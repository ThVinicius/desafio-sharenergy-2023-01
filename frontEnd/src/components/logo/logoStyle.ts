import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font: normal 500 25px 'Lexend Deca', sans-serif;
    padding-bottom: 5px;
  }

  img {
    width: auto;
    height: 20px;
  }

  @media (max-width: 940px) {
    width: calc(100% - 50px);
    gap: 5px;

    h1 {
      font: normal 500 20px 'Lexend Deca', sans-serif;
      padding-bottom: 5px;
    }

    img {
      width: 150px;
      height: 20px;
    }
  }
`

export { Container }
