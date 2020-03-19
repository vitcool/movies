import { getRequest } from './apiTools'

const API_KEY = '54ffed57deb5a7a8688be4de3007e578'

export const getNowPlayingMovies = () => {
  return getRequest('/movie/now_playing', {
    api_key: API_KEY,
    page: 1
  }).then((response) => {
    return response.json();
  })
}
