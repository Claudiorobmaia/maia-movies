import api from './api'

// busca os filmes mais populares
export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}
// busca os filmes mais bem avaliados
export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}
// busca as séries mais bem avaliadas
export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}
// busca as séries mais populares
export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

// busca os atores mais populares
export async function getTopPeoples() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

// busca um filme pelo ID para pegar o trailer
export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}
//--------------
export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}
// busca o trailer de uma série pelo ID
export async function getSerieVideos(serieId) {
  const {
    data: { results }
  } = await api.get(`/tv/${serieId}/videos`) // 👈 "tv" em vez de "movie"

  return results
}

// busca uma série pelo ID
export async function getSerieById(serieId) {
  const { data } = await api.get(`/tv/${serieId}`)
  return data
}

// busca os créditos de uma série
export async function getSerieCredits(serieId) {
  const {
    data: { cast }
  } = await api.get(`/tv/${serieId}/credits`)
  return cast
}

// busca séries similares
export async function getSerieSimilar(serieId) {
  const {
    data: { results }
  } = await api.get(`/tv/${serieId}/similar`)
  return results
}