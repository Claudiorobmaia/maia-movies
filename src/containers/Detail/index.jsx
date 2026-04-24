import {
  getMovieById, getMovieVideos, getMovieCredits, getMovieSimilar,
  getSerieById, getSerieVideos, getSerieCredits, getSerieSimilar
} from '../../services/getData'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom' // 👈 adiciona useSearchParams
import { getImages } from '../../utils/getImages'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'
import Slider from '../../components/Slider'

function Detail() {
  const { id } = useParams()
  const [searchParams] = useSearchParams() // 👈 lê os parâmetros da URL
  const type = searchParams.get('type')    // 👈 pega o valor de "?type=tv"

  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      // Se type for "tv", usa funções de série. Senão, usa funções de filme
      const isSerie = type === 'tv'

      Promise.all([
        isSerie ? getSerieById(id) : getMovieById(id),
        isSerie ? getSerieVideos(id) : getMovieVideos(id),
        isSerie ? getSerieCredits(id) : getMovieCredits(id),
        isSerie ? getSerieSimilar(id) : getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {
          setMovie(movie)
          setMovieVideos(videos)
          setMovieCredits(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title || movie.name}</h2> {/* 👈 série usa "name" */}
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <Credits credits={movieCredits} />
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.slice(0, 2).map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    width="100%"
                    style={{ aspectRatio: '16/9', height: 'auto', border: 'none' }}
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={type === 'tv' ? 'Séries Similares' : 'Filmes Similares'} />
          )}
        </>
      )}
    </>
  )
}

export default Detail