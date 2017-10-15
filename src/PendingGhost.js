import React from 'react'
import PropTypes from 'prop-types'

const PendingGhost = props => {
  if (props.name) {
    return (
      <li className="pending">
        <span>
          {props.name}
        </span>
      </li>
    )
  }
  return null
}

PendingGhost.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PendingGhost
