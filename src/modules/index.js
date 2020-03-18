import { combineReducers } from 'redux'
import movieLibReducer from './movies/reducer'

const rootReducer = combineReducers({
  movieLib: movieLibReducer
})

export default rootReducer
