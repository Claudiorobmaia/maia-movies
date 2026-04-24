import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    background-color: #000000;
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 24px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    gap: 18px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 10px;
  }
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 50px;
    font-weight: 700;
    color: #ffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;

    h1 { font-size: 2.5rem; }
    p  { font-size: 16px; margin-top: 16px; }
  }

  @media (max-width: 768px) {
    padding: 14px;

    h1 { font-size: 2rem; }
    p  { font-size: 14px; }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h1 { font-size: 1.6rem; }
    p  { font-size: 13px; }
  }
`

export const Poster = styled.div`
  z-index: 2;
  flex-shrink: 0;

  img {
    width: 300px;
    border-radius: 10px;
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

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    padding: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
  }
`