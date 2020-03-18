import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css';

class MovieListItem extends Component {
  handleClick = () => {
    const { movie, onSelect } = this.props
    onSelect(movie)
  }

  render() {
    const {
      movie: { title, vote_average },
      isSelected,
    } = this.props

    return (
      <div
        className={classNames('movie-list-item', { selected: isSelected })}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex={-1}
      >
        {title}({vote_average})
      </div>
    )
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default MovieListItem
