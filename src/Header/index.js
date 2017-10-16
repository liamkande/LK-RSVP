import React from 'react'
import PropTypes from 'prop-types'
import logo from '../LKweblogo.svg'

import GuestInputForm from './GuestInputForm'

const Header = props =>
<header>
  <h1>RSVP</h1>
  <a href="http://liamkande.com">
  <img src={logo} width={70} alt="LK-Logo"/>
  </a>
  <GuestInputForm
    newGuestSubmitHandler={props.newGuestSubmitHandler}
    handleNameInput={props.handleNameInput}
    pendingGuest={props.pendingGuest}
    />

</header>

Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}


export default Header
