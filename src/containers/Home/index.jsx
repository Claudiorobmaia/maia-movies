import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import Modal from '../../components/Modal'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import { useNavigate } from 'react-router-dom'
import {
  getMovies,
  getTopMovies,
  getTopSeries,
  getPopularSeries,
  getTopPeoples
} from '../../services/getData'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeoples, setTopPeoples] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      console.time('time')

      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeoples()
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topPeoples]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setTopPeoples(topPeoples)
        })
        .catch((error) => console.error(error))
      console.timeEnd('time')
    }

    getAllData()
  }, [])
  console.log(movie)

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
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
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {topPeoples && <Slider info={topPeoples} title={'Atores Populares'} />}
    </>
  )
}

export default Home

// chave api do tmdb 685365efcd1ca5eaff6e057c7e188a56
