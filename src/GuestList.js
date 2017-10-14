import React from 'react'
import ProTypes from 'prop-types'

const GuestList = props =>
  <ul>
    { props.guests.map((guest, index) =>
      <li key={index}>
        <span>{guest.name}</span>
        <label>
          <input type="checkbox" checked={guest.isConfirmed}/> Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    )}
  </ul>

GuestList.propTypes = {
  guests: ProTypes.array.isRequired
}
export default GuestList
