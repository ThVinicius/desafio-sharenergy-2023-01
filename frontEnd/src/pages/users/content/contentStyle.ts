import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  overflow-y: auto;

  @media (max-width: 420px) {
    padding: 25px 0;
  }
`

export { Container }
