import React from 'react'
import PropTypes from 'prop-types'

const MovieDetails = ({ modalProps, handleModalClose }) => {
  return (
    <>
      <h1>{modalProps.title}</h1>
      <button onClick={handleModalClose} type="button">
        Close
      </button>
    </>
  )
}

MovieDetails.propTypes = {
  modalProps: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func.isRequired
}

export default MovieDetails
