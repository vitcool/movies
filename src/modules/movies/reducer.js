import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED
} from './actionTypes'

const initialState = {
  movies: [],
  totalPages: 0,
  error: ''
}

export default function movies(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_MOVIES_SUCCESS: {
      const { results, total_pages } = payload
      return {
        ...state,
        movies: [...state.movies, ...results],
        totalPages: total_pages
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
