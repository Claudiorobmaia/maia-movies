import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import { getMovieVideos, getSerieVideos } from '../../services/getData'

function Modal({ movieId, setShowModal, type }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getVideos() {
      let resultado

      if (type === 'tv') {
        resultado = await getSerieVideos(movieId)
      } else {
        resultado = await getMovieVideos(movieId)
      }

      

      setMovie(resultado)
    }
    getVideos()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="YouTube video player"
            height="500"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal