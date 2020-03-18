import { FETCH_MOVIES } from './actionTypes'
import topRatedMovies from '../../mocks/topTatedMovies.json'

export function fetchTopRatedMovies() {
  return {
    type: FETCH_MOVIES,
    payload: topRatedMovies
  }
}
