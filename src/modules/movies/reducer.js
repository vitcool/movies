import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED
} from './actionTypes'

const initialState = {
  movies: []
}

export default function movies(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_MOVIES_SUCCESS: {
      const { results } = payload
      return {
        ...state,
        movies: results || []
      }
    }

    case FETCH_MOVIES_FAILED: {
      return {
        ...state,
        error: payload
      }
    }

    default:
      return state
  }
}
