import React, {useState} from 'react';
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import twitter from '../../assets/icons/twitter.png';
import { useAuth } from '../../contexts/AuthContext';
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider
} from 'react95';

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar className='footer'>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={twitter}
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
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                Profile
              </ListItem>
              <ListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                My account
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <TextField placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>
  )
}

export default Footer;