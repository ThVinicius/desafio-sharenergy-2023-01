import styled from 'styled-components'

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

export { BoxItens, Itens }
