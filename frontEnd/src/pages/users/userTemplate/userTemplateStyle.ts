import styled from 'styled-components'

const Container = styled.div`
  width: 350px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 2px 1px 7px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const AvatarBox = styled.div`
  width: 100%;
  margin-top: -45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  h6 {
    font: normal 400 20px 'Lexend Deca', sans-serif;
  }
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

const UsersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 75px 15px;
`

const SkeletonContainer = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export { Container, AvatarBox, Info, UsersContainer, SkeletonContainer }
