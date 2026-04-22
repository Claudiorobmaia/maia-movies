import { getImages } from '../../utils/getimages'
import { Container } from './styles'

function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || '')} />

      <h2>{item.title || item.name} </h2>
    </Container>
  )
}

export default Card
