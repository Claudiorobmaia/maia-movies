import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'

function Series() {
  const [serie, setSerie] = useState()
  const [topSeries, setTopSeries] = useState()
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setSerie(results[0])
    }

    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setTopSeries(results.slice(0, 10))
    }

    getSeries()
    getTopSeries()
  }, [])

  return (
    <>
      {serie && (
        <Background
          img={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`}
        >
          
          <Container>
            <Info>
              <h1>{serie?.name}</h1>
              <p>{serie?.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detail/${serie.id}?type=tv`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
                alt={serie.name}
              />
            </Poster>
          </Container>
        </Background>
      )}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {showModal && <Modal movieId={serie.id} setShowModal={setShowModal} type="tv" />}
    </>
  )
}

export default Series