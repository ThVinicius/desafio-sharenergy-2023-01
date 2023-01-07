import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: 420px) {
    gap: 9px;
  }
`

export { Container }
