import React from 'react'
import ProTypes from 'prop-types'
import Guest from './Guest'

const GuestList = props =>
  <ul>
    { props.guests.map((guest, index) =>
      <Guest key={index} name={guest.name} isConfirmed={guest.isConfirmed} />
    )}
  </ul>

GuestList.propTypes = {
  guests: ProTypes.array.isRequired
}
export default GuestList
