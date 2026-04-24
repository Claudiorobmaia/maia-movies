import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from { transform: scale(0) }
  to   { transform: scale(1) }
`

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;     /* ← adicionado */
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;           /* ← evita poster vazar para fora */

  @media (max-width: 768px) {
    height: auto;             /* ← não força altura fixa no tablet */
    min-height: 100vh;
    padding-bottom: 30px;
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    padding-bottom: 20px;
  }

  &&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;              /* ← era max-width sem width, causava problema */
  max-width: 1200px;
  padding: 0 20px;
  z-index: 2;               /* ← fica acima do ::before e ::after */

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    gap: 14px;
    padding: 12px;
  }
`

export const Info = styled.div`
  z-index: 2;
  padding: 30px;
  width: 50%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    padding: 20px;

    h1 { font-size: 2.8rem; }
    p  { font-size: 17px; }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    text-align: center;

    h1 { font-size: 2.2rem; }
    p  { font-size: 15px; margin-top: 14px; }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h1 { font-size: 1.6rem; }
    p  { font-size: 13px; }
  }
`

export const Poster = styled.div`
  z-index: 3;
  flex-shrink: 0;            /* ← evita o poster encolher e sair do lugar */

  img {
    width: 260px;
    border-radius: 12px;
    display: block;
  }

  @media (max-width: 1024px) {
    img { width: 220px; }
  }

  @media (max-width: 768px) {
    img { width: 180px; }
  }

  @media (max-width: 480px) {
    img { width: 140px; }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`