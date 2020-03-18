import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import './index.css'
import { ModalContext } from '../Modal/ModalProvider'
import { MODAL_CONTENTS } from '../../constants/modal'

const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/'

const MovieListItem = ({ movie }) => {
  const { openModal } = useContext(ModalContext);
  const {
    title,
    original_title,
    vote_average,
    poster_path,
    overview
  } = movie

  const handleClick = () => {
    openModal(MODAL_CONTENTS.MOVIE_DETAILS, movie);
  }

  const backgroundImage = {
    backgroundImage: `url('${TMDB_IMAGE_BASE_PATH}${poster_path}')`
  }
  const originalIsNotTitle = title !== original_title

  return (
    <div className="list-item-wrapper" style={backgroundImage}>
      <div
        className="movie-info-wrapper"
        onClick={handleClick}
        onKeyDown={handleClick}
        tabIndex={-1}
        role="button"
      >
        <div className="movie-info-content">
          <h4 className="movie-info-title">{title}</h4>
          {originalIsNotTitle && <p>({original_title})</p>}
          <p className="movie-info-vote">Rating: {vote_average}</p>
          <div className="overview-wrapper">
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieListItem
