import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import google from '../../assets/icons/google.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { login, currentUser, signInWithPopup } = useAuth()

  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('Passwords do not match')
    }

    try {
      await login(emailRef.current.value, passwordRef.current.value)
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
      <div className='form-container'>
        <h1 className='signup-title'>Sign Up</h1>
        {error && <p>{error}</p>}
        <form className='signup-form'>
          <div className='email-container'>
            <label htmlFor='email'>Email</label>
            <input
              className='email'
              type='email'
              ref={emailRef}
              required
            />
          </div>
          <div className='password-container'>
            <label htmlFor='email'>Password</label>
            <input
              className='password'
              type='new-password'
              ref={passwordRef}
              required
            />
            <label htmlFor='email'>Confirm Password</label>
            <input
              className='password'
              type='new-password'
              ref={confirmPasswordRef}
              required
            />
          </div>
          <button type='submit' className='form-submit-button' onSubmit={handleSubmit}>Login</button>
        </form>
        <div className='or-container'>
          <hr className='line'></hr>
          <p className='or-text'>or</p>
          <hr className='line'></hr>
        </div>
        <div className='auth-button-container'>
          <button className='google-button' id='google' onClick={handleSignInWithPopup}>
            <img src={google} alt='login with google' />
            google
          </button>
          <button className='twitter-button' id='twitter' onClick={handleSignInWithPopup}>
            <img src={twitter} alt='login with twitter' />
            twitter
          </button>
          <button className='github-button' id='github' onClick={handleSignInWithPopup}>
            <img src={github} alt='login with github' />
            github
          </button>
        </div>
        <p className='form-footer'>I have an account!<Link to='/login' className='login-link'>Login</Link></p>
      </div>
    </>
  )
}

export default Signup