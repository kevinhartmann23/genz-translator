import React, { useState } from 'react';
import Clock from '../Clock/Clock'
import { Redirect, Link } from 'react-router-dom';
import logout from '../../assets/icons/logout.png';
import account from '../../assets/icons/account.png';
import { useAuth } from '../../contexts/AuthContext';
import { useApp } from '../../contexts/AppContext';

import './Header.css'

import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider
} from 'react95';

const Header = () => {
  const { signOut, currentUser } = useAuth()
  const { updateTheme } = useApp()
  const [open, setOpen] = useState(false);

  async function handleLogout(event) {
    event.preventDefault()
    try {
      await signOut()
      await updateTheme('original')
    } catch (error) {
      console.log('error', error)
    }

  }

  return (
    <>
    {!currentUser && <Redirect to="/login" />}
    {currentUser &&  
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            className='start-button'
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold', width: '7rem' }}
          >
            <img
              src={logout}
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setOpen(false)}
            >
            <Link to='/about' style={{ width: '6.5rem', textAlign: 'center' }}>
              <ListItem style={{width:'6.5rem', textAlign:'center'}} >
                <img src={account} alt='about gen z to a' style={{ height: '20px', width:'20px'}}/>
                About
              </ListItem>
            </Link>
            <Divider />
            <Link to='/account' style={{ width: '6.5rem', textAlign: 'center' }}>
              <ListItem style={{width:'6.5rem', textAlign:'center'}} >
                <img src={account} alt='account information' style={{ height: '20px', width:'20px' }}/>
                Account
              </ListItem>
            </Link>
            <Divider />
            <ListItem  style={{width:'6.5rem', textAlign:'center'}} onClick={handleLogout} className='logout-button'>
              <img src={logout} alt='logout'style={{ height: '20px', width:'20px' }}/>
              Logout
            </ListItem>
          </List>
        )}
        </div>
        <Clock />
      </Toolbar>
    </AppBar>
    }
    </>
  )
}

export default Header;