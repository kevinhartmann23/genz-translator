import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';
import './Dashboard.css'

const Dashboard = () => {
  const [display, setDisplay] = useState()

  return (
    <section className='dashboard'>
      <h1 className='welcome'>Welcome to</h1>
      <h2 className='title'>GenZtoA</h2>
      <p className='slogan'>translating what those darn kids are saying...</p>
    </section>
  )
}

export default Dashboard;