import React, {
  Fragment,
  useEffect,
  useState,
  useCallback
} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovies, getMoviesError, getTotalPages } from '../../modules/movies/selectors'
import { fetchNowPlaying } from '../../modules/movies/actions'

import MoviesList from '../MoviesList'
import Modal from '../Modal'
import Loader from '../Loader'

import { debounce } from '../../helpers/debounce'

import logo from '../../assets/images/logo.svg'

import './index.css'

const MovieLibrary = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const movies = useSelector(getMovies)
  const moviesError = useSelector(getMoviesError)
  const totalPages = useSelector(getTotalPages);

  const fetchData = useCallback((numberOfPage = 1) => {
    setIsLoading(true)
    dispatch(fetchNowPlaying({ page: numberOfPage })).then(() => setIsLoading(false))
    setPage(numberOfPage)
  }, [dispatch]);

  useEffect(() => {
    window.onscroll = debounce(() => {
      const futurePage = page + 1;
      const futurePageIsExist = totalPages >= futurePage;
      const scrollPosition = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
      if (scrollPosition && futurePageIsExist) {
        fetchData(page + 1);
      }
    }, 100);
  }, [fetchData, page, totalPages]);


  useEffect(() => fetchData(), [fetchData])

  return (
    <Fragment>
      <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        <div className="ML-intro">
          {movies.length ? <MoviesList movies={movies} /> : null}
        </div>
        {isLoading && <Loader />}
        {moviesError ? (
          <div className="error-message">{moviesError}</div>
        ) : null}
      </div>
      <Modal />
    </Fragment>
  )
}

export default MovieLibrary
