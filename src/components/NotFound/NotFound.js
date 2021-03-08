import React from 'react';
import notFound from '../../assets/icons/notfound.png'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

import './NotFound.css'

import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
} from 'react95'

function NotFound() {
  const { currentUser } = useAuth()
  
  return (
    <>
      {currentUser && 
        <Window style={{ width: '80%', height: '90%', marginTop: '3.5rem' }}>
          <WindowHeader active={false} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>404!</span>
          </WindowHeader>
          <WindowContent style={{display:'flex', flexDirection:'column', justifyContent:'space-around', width:'95%', height:'90%', alignItems:'center'}}>
            <div style={{ width: '100%', height:'75%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ height: '15rem', width: '15rem'}} src={notFound} alt='Error' />
              <p className='title-notfound'style={{textAlign: 'center'}}>Uh Oh! Looks like we can't find the page you are looking for or an error has occured!</p>
            </div>
            <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <Link to='/' style={{ width: '2rem' }}>
                <Button className='dashboard-button' style={{ fontWeight: 'bold', fontSize:'2rem', width:'20rem', height:'3rem'}}>
                  ↩︎ To Dashboard
                </Button>
              </Link>
            </div>
          </WindowContent>
        </Window>
      }
    </>
  );
}

export default NotFound;