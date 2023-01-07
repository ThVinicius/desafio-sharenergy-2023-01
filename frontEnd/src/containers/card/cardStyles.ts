import { props } from 'cypress/types/bluebird'
import styled from 'styled-components'

interface IProps {
  padding?: string
  width?: string
}

const Container = styled.div<IProps>`
  width: ${props => (props.width ? props.width : 'auto')};
  padding: ${props => (props.padding ? props.padding : '30px')};
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 10px 5px;
`

export { Container }
