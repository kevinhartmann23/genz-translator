import React from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Redirect } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';
import './Dashboard.css'

const Dashboard = () => {
  const { currentUser } = useAuth()
  
  return (
    <>
        <section className='dashboard'>
          <h1 className='welcome'>Welcome to</h1>
          <h2 className='title'>GenZtoA</h2>
          <p className='slogan'>translating what those darn kids are saying...</p>
        </section>
    </>
  )
}

export default Dashboard;