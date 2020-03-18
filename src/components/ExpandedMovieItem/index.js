import React from 'react'
import PropTypes from 'prop-types'

import TMDBImage from '../TMDBImage'

import './index.css';

const ExpandedMovieItem = ({
  movie: {
    title,
    original_title,
    poster_path,
    overview,
    vote_average,
    vote_count,
  },
}) => (
  <div className="expanded-movie-item">
    <TMDBImage src={poster_path} className="poster" />
    <div className="description">
      <h2>
        {title}({original_title})
      </h2>
      <div>
        <h4>Rank(votes count)</h4>:{' '}
        <span>
          {vote_average}({vote_count})
        </span>
      </div>
      <span>{overview}</span>
    </div>
  </div>
)

ExpandedMovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default ExpandedMovieItem
