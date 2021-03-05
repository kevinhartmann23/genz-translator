import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import google from '../../assets/icons/google.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import './Login.css'

import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  TextField,
  Anchor,
  Panel
} from 'react95'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser, signInWithPopup } = useAuth()

  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await login(emailRef.current.value, passwordRef.current.value)
      setError('')
    } catch (error) {
      setError(error.message)
    }
  }

  function handleSignInWithPopup(event) {
    console.log(event.target.id)
    signInWithPopup(event.target.id)
  }

  return (
    <>
      {currentUser && <Redirect to='/' />}
      <Window className='window' style={{ width: '30vw', marginTop: '6.5rem' }}>
        <WindowHeader active={true} className='window-header'>
          <span>GenZ 2 A - Login</span>
        </WindowHeader>
        <WindowContent style={{}}>
          <div className='form-container'>
            {error &&
              <Panel
                variant='well'
                style={{ marginTop: '1rem', padding: '0.1rem 0.25rem', width: '100%', color: 'red' }}
              >
                <p>{error}</p>
              </Panel>
            }
            <form className='signup-form'>
              <div className='email-container'>
                <label htmlFor='email'>Email</label>
                <TextField
                  className='email'
                  type='email'
                  ref={emailRef}
                  required
                />
              </div>
              <div className='password-container'>
                <label htmlFor='email'>Password</label>
                <TextField
                  className='password'
                  type='password'
                  ref={passwordRef}
                  required
                />
              </div>
              <Button style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }} type='submit' className='form-submit-button' onSubmit={handleSubmit}>Login</Button>
            </form>
            <div className='or-container'>
              <hr className='line'></hr>
              <p className='or-text'>or</p>
              <hr className='line'></hr>
            </div>
            <div className='auth-button-container'>
              <Button className='google-button' id='google' onClick={handleSignInWithPopup}>
                <img src={google} alt='login with google' style={{ height: '1.5rem', marginRight: '.25rem' }} />
                 Continue With Google
              </Button>
              <Button className='twitter-button' id='twitter' onClick={handleSignInWithPopup}>
                <img src={twitter} alt='login with twitter' style={{ height: '1.75rem', marginRight: '.25rem' }} />
                 Continue with Twitter
              </Button>
              <Button
                className='github-button'
                id='github'
                onClick={handleSignInWithPopup}
              >
                <img src={github} alt='login with github' style={{ height: '1.5rem', marginRight: '.25rem' }} />
                 Continue with Github
              </Button>
            </div>
            <p className='form-footer'>Don't have an account? <Anchor><Link to='/signup' className='login-link'>Sign Up</Link></Anchor></p>
          </div>
        </WindowContent>
      </Window>
    </>
  )
}

export default Login