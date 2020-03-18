import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getMovies } from '../../modules/movies/selectors'
import { fetchTopRatedMovies } from '../../modules/movies/actions'

import MoviesList from '../MoviesList'

import logo from '../../assets/images/logo.svg'

import './index.css'
import Modal from '../Modal'

class MovieLibrary extends Component {
  componentDidMount() {
    const { fetchTopRatedMovies: fetchMovies } = this.props
    fetchMovies()
  }

  render() {
    const { movies } = this.props
    return (
      <Fragment>
        <div className="MovieLibrary">
          <header className="ML-header">
            <img src={logo} className="ML-logo" alt="logo" />
            <h1 className="ML-title">Movies</h1>
          </header>
          <div className="ML-intro">
            {movies.length && <MoviesList movies={movies} />}
          </div>
        </div>
        <Modal />
      </Fragment>
    )
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchTopRatedMovies: PropTypes.func.isRequired
}

export default connect(
  state => ({
    movies: getMovies(state)
  }),
  { fetchTopRatedMovies }
)(MovieLibrary)
