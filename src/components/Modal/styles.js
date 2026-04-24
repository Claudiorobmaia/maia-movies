import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Container = styled.div`
  background: #000;
  width: 90%;
  max-width: 900px;
  position: relative;
  padding: 0;

  /* Mantém proporção 16:9 automaticamente */
  aspect-ratio: 16 / 9;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`