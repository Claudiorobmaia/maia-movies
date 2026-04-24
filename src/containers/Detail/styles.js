import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from { transform: scale(0) }
  to   { transform: scale(1) }
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 55vh;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
    height: 120px;
    background: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 30vh;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1500px;
  margin: -100px auto 0 auto;   /* ← corrigido o margin errado */
  padding: 0 20px;

  /* Tablet — empilha poster em cima, info embaixo */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: -60px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    margin-top: -40px;
    padding: 0 10px;
  }
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  z-index: 99;

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
    display: block;
  }

  @media (max-width: 1024px) {
    padding: 12px;
    img { width: 220px; border-radius: 18px; }
  }

  @media (max-width: 768px) {
    justify-content: center;
    img { width: 180px; }
  }

  @media (max-width: 480px) {
    padding: 8px;
    img { width: 140px; border-radius: 12px; }
  }
`

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 16px;

    h2 { font-size: 24px; }
  }

  @media (max-width: 768px) {
    padding: 12px;
    h2 { font-size: 20px; }
    p  { font-size: 14px; margin-top: 12px; margin-bottom: 16px; }
  }

  @media (max-width: 480px) {
    padding: 8px;
    h2 { font-size: 18px; }
    p  { font-size: 13px; }
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
    width: 100%;
    aspect-ratio: 16/9;   /* ← mantém proporção automaticamente */
  }

  @media (max-width: 1024px) {
    padding: 16px;
    h4 { font-size: 17px; }
  }

  @media (max-width: 768px) {
    padding: 14px;
    h4 { font-size: 16px; }
  }

  @media (max-width: 480px) {
    padding: 10px;
    h4 { font-size: 14px; }
  }
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 40px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`

export const DetailPoster = styled.div`
  width: 300px;
  flex-shrink: 0;

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
`

export const DetailInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 2rem;
    color: #fff;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h1 { font-size: 1.2rem; }
  }
`