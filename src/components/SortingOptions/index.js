/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SortingOptions extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    const selectedValue = e.target.value
    const { onChange } = this.props
    this.setState({ value: selectedValue })
    onChange(selectedValue)
  }

  render() {
    const { value } = this.state

    return (
      <select value={value} onChange={this.handleChange}>
        <option value="" />
        <option value="name_asc">A -> Z</option>
        <option value="name_desc">Z -> A</option>
        <option value="rating">Rating</option>
      </select>
    )
  }
}

SortingOptions.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SortingOptions
