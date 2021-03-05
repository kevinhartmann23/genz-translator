import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Link, Redirect} from 'react-router-dom'

const Menu = () => {
  const { signOut, currentUser } = useAuth()

  async function handleClick(event) {
    event.preventDefault()
    try {
      await signOut()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
    {!currentUser && <Redirect to="/login" />}
    {currentUser && <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div id="myDropdown" className="dropdown-content">
        <Link to='/account'>
          <button>Account</button>
        </Link>
        <button onClick={handleClick}>Log Out</button>
      </div>
    </div>
    }
    </>
  )
}

export default Menu