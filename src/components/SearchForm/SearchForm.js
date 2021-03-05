import React, {useState} from 'react' 
import { Link, Redirect } from 'react-router-dom'
import './SearchForm.css'

import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  TextField,
  LoadingIndicator,
  Panel
} from 'react95'

const SearchForm = () => {
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearch] = useState('')
  
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    console.log(searchValue)
  }
  
  return (
    <Window className='window' style={{ width: '25rem', alignSelf: 'center'}}>
      <WindowHeader className='window-header'>
        <span>GenZ Lingo Search</span>
        <Button onClick={() => <Redirect to='/' />}>
          <span className='close-icon' />
        </Button>
      </WindowHeader>
      <WindowContent>
        <div className='search-container'>
          <form className='search-form'>
            <TextField 
              className='search'
              id="search"
              type='text'
              placeholder='What did that kid just say?!'
              value={searchValue}
              onChange={handleChange}
              required
            />
            <Button onClick={handleClick}>Search</Button>
          </form>
        </div>
      </WindowContent>
      <div className='loading-container'>
        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Searching Term...</p>
        <LoadingIndicator isLoading />
      </div>
    </Window> 
  )
}

export default SearchForm