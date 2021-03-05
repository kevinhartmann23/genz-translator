import React, {useState, useEffect} from 'react';
import Clock from '../Clock/Clock'
import { Redirect } from 'react-router-dom';
import logout from '../../assets/icons/logout.png';
import account from '../../assets/icons/account.png';
import { useAuth } from '../../contexts/AuthContext';

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
  const [open, setOpen] = useState(false);

  async function handleLogout(event) {
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
    {currentUser &&  
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
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
              <ListItem>
                <img
                  src={account}
                  alt='account information'
                  style={{ height: '20px', marginRight: 4 }}
                />
                Account
              </ListItem>
              <Divider />
              <ListItem onClick={handleLogout}>
                <img
                  src={logout}
                  alt='logout'
                  style={{ height: '20px', marginRight: 4 }}
                />
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