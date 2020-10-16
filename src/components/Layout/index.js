import styled from 'styled-components'

const Layout = styled.div`
  z-index: 100000;
  width: 100%;
  background: transparent;

  > a {
    > img {
      height: 130px;
      width: 110px;
      margin-left: 200px;
    }
  }

  > div {
    width: 100%;
  }

  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export default Layout
