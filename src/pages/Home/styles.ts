import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 500vh;
  background: #343078;
`

export const Header = styled.header`
  width: 100%;
  background: #1b113b80;
  display: flex;
  align-items: center;
  height: 120px;
  position: fixed;

  z-index: 10;
`

export const VideoArea = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
`
