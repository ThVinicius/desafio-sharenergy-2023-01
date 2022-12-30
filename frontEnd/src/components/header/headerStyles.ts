import styled from 'styled-components'

const Container = styled.header`
  width: 100vw;
  height: 80px;
  padding-left: 25px;
  padding-right: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
`

const Logo = styled.div`
  width: 50%;
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
`

const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`

const BoxItens = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`

interface IProps {
  color: string
}

const Itens = styled.h6<IProps>`
  color: ${props => props.color};
  font: normal 500 20px 'Lexend Deca', sans-serif;
  cursor: pointer;

  :hover {
    color: #00a2a2;
  }
`

const Logout = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  font: normal 700 20px 'Lexend Deca', sans-serif;
  color: red;
  gap: 5px;
`

export { Container, Menu, Logo, BoxItens, Itens, Logout }
