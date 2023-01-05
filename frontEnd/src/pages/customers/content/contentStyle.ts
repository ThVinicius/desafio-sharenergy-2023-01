import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  gap: 40px;
`

const CustomersContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`

const BtnBox = styled.div`
  width: 100px;
`

export { Container, CustomersContainer, BtnBox }
