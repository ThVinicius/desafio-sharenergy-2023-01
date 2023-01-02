import styled from 'styled-components'

interface IProps {
  calcHeight: string
}

const Container = styled.div<IProps>`
  width: 100vw;
  height: calc(100vh - ${props => props.calcHeight});
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #38ef7d,
    #11998e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #38ef7d,
    #11998e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export { Container }
