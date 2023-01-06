import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 420px) {
    gap: 20px;
  }
`

const MenuIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

export { Container, MenuIcon }
