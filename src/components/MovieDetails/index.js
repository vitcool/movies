import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const MovieDetails = ({ modalProps, handleModalClose }) => {
  const {
    title,
    vote_average,
    popularity,
    overview,
    release_date
  } = modalProps

  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <h4 className="modal-title">{title}</h4>
        <button
          onClick={handleModalClose}
          type="button"
          className="close-button"
        >
          X
        </button>
      </div>
      <div className="modal-content">
        <p className="content-item">Rating: {vote_average}</p>
        <p className="content-item">Popularuty:{popularity}</p>
        <p className="content-item">Overview: {overview}</p>
        <p className="content-item">Release date: {release_date}</p>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  modalProps: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func.isRequired
}

export default MovieDetails
