/* eslint-disable func-names */
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILED } from './actionTypes'
import { getNowPlayingMovies } from '../../api/movieApi'

export function fetchNowPlaying() {
  return function (dispatch) {
    return getNowPlayingMovies().then(response => {
      const { status_code, status_message } = response;
      if (status_code) {
        return dispatch({
          type: FETCH_MOVIES_FAILED,
          payload: status_message
        })
      }
      return dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: response
      })
    }).catch(error => {
      return dispatch({
        type: FETCH_MOVIES_FAILED,
        payload: error
      })
    })
  }
}
