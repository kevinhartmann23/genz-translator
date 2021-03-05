import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import google from '../../assets/icons/google.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import './Signup.css'

import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  TextField,
  Anchor,
  Panel
} from 'react95'

const Signup = () => {
  const [emailText, setEmail] = useState('')
  const [passwordText, setPassword] = useState('')
  const [confirmText, setConfirm] = useState('')
  const { signUp, currentUser, signInWithPopup } = useAuth()

  const [error, setError] = useState('')

  function handleChange(event) {
    event.preventDefault()
    if (event.target.id === 'email') {
      setEmail(event.target.value)
    } else if (event.target.id === 'password') {
      setPassword(event.target.value)
    } else {
      setConfirm(event.target.value)
    }
  }

  function validatePasswords(event){
    event.preventDefault()

    if (passwordText !== confirmText) {
      setError('Passwords do not match')
    } else {
      handleSubmit(event)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
   
    try {
      await signUp(emailText, passwordText)
      setError('')
    } catch (error) {
      setError(error.message)
    }
  }

  function handleSignInWithPopup(event) {
    signInWithPopup(event.target.id)
  }

  return (
    <>
      {currentUser && <Redirect to='/' />}
      <Window className='window' style={{width:'30vw', marginTop:'4.5rem'}}>
        <WindowHeader active={true} className='window-header'>
          <span>GenZ 2 A - SignUp</span>
        </WindowHeader>
        <WindowContent style={{}}>
          <div className='form-container'>
            {error && 
              <Panel 
                variant='well'
              style={{ marginTop: '.5rem', marginBottom: '1rem', padding: '0.1rem 0.25rem', width: '100%', color: 'red', textAlign: 'center' }}
              >
              <p className='error'>{error}</p>
              </Panel>
            }
            <form className='signup-form'>
              <div className='email-container'>
                <label htmlFor='email'>Email</label>
                <TextField
                  className='email'
                  id='email'
                  type='email'
                  value={emailText}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='password-container'>
                <label htmlFor='email'>Password</label>
                <TextField
                  className='password'
                  id='password'
                  type='new-password'
                  value={passwordText}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='email'>Confirm Password</label>
                <TextField
                  className='password'
                  id="confirm"
                  type='new-password'
                  value={confirmText}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button style={{width:'100%', marginTop:'1rem', marginBottom:'1rem'}}type='submit' className='form-submit-button' onClick={validatePasswords}>Sign Up</Button>
            </form>
            <div className='or-container'>
              <hr className='line'></hr>
              <p className='or-text'>or</p>
              <hr className='line'></hr>
            </div>
            <div className='auth-button-container'>
              <Button className='google-button' id='google' onClick={handleSignInWithPopup}>
                <img src={google} alt='login with google' style={{ height: '1.5rem', marginRight: '.25rem' }}/>
                 Continue With Google
              </Button>
              <Button className='twitter-button' id='twitter' onClick={handleSignInWithPopup}>
                <img src={twitter} alt='login with twitter' style={{ height: '1.75rem', marginRight:'.25rem' }}/>
                 Continue with Twitter
              </Button>
              <Button 
                className='github-button' 
                id='github' 
                onClick={handleSignInWithPopup}
                >
                <img src={github} alt='login with github' style={{ height: '1.5rem', marginRight: '.25rem'}}/>
                 Continue with Github
              </Button>
            </div>
            <p className='form-footer'>I have an account! <Link to='/login' className='login-link'>Login</Link></p>
          </div>
        </WindowContent>
      </Window>
    </>
  )
}

export default Signup