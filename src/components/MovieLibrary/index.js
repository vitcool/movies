import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovies, getMoviesError } from '../../modules/movies/selectors'
import { fetchNowPlaying } from '../../modules/movies/actions'

import MoviesList from '../MoviesList'

import logo from '../../assets/images/logo.svg'

import './index.css'
import Modal from '../Modal'
import Loader from '../Loader'

const MovieLibrary = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const movies = useSelector(getMovies)
  const moviesError = useSelector(getMoviesError)

  const fetchData = () => {
    setIsLoading(true)
    dispatch(fetchNowPlaying()).then(() => setIsLoading(false))
  }

  useEffect(() => fetchData(), [])

  return (
    <Fragment>
      <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        {isLoading && <Loader />}
        {moviesError ? (
          <div className="error-message">{moviesError}</div>
        ) : null}
        <div className="ML-intro">
          {movies.length ? <MoviesList movies={movies} /> : null}
        </div>
      </div>
      <Modal />
    </Fragment>
  )
}

export default MovieLibrary
