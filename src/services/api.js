import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '685365efcd1ca5eaff6e057c7e188a56',
    language: 'pt-BR',
    page: 1
  }
})

export default api
