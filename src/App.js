import React, { Component } from 'react'
import GuestList from './GuestList'
import logo from './LKweblogo.svg'
class App extends Component {

  state = {
    guests: [
      {
        name: 'Apple',
        isConfirmed: false
      },
      {
        name: 'Liam',
        isConfirmed: true
      },
      {
        name: 'Juliana',
        isConfirmed: true
      }
    ]
  }

  toggleConfirmationAt = indexToChange =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest, // name: guest.name
            isConfirmed: !guest.isConfirmed
          }
        }
      })
    })

  getTotalInvited = () => this.state.guests.length
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <a href="http://liamkande.com/"><img src={logo} width={70} alt="LKPLAYS Logo" />
          </a>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList guests={this.state.guests}/>
        </div>
      </div>
    );
  }
}

export default App
