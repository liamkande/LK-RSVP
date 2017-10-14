import React from 'react'
import ProTypes from 'prop-types'

const Guest = props =>
    <li>
      <span>{props.name}</span>
      <label>
        <input type="checkbox" checked={props.isConfirmed}/> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>


Guest.propTypes = {
  name: ProTypes.string.isRequired,
  isConfirmed: ProTypes.bool.isRequired
}
export default Guest
