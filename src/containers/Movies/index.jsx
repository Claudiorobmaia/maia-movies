import api from '../../services/api'

import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'

function Movies() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopMovies(results.slice(0, 10))
    }

    getMovies()
    getTopMovies()
  }, [])

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `}
        >
           {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie?.title}</h1>
              <p>{movie?.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detail/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
    </>
  )
}

export default Movies
