import React, {useState} from 'react' 
import { Link, Redirect } from 'react-router-dom'
import searchTerms from '../../assets/icons/search_terms.png'
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
    setLoading(true)
    console.log(searchValue)
  }
  
  return (
    <>
    <Window className='window' style={{ width: '30rem', height:'auto', alignSelf: 'center', right:'30%', display:'flex', flexDirection:'column'}}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <span>GenZ Lingo Search</span>
        <Link to='/' style={{width:'2rem'}}>
          <Button style={{ fontWeight: 'bold' }}>
            X
          </Button>
        </Link>
      </WindowHeader>
      <WindowContent>
        <div className='search-container'>
          <img className='search-icon' src={searchTerms} alt='search icon'/>
          <form className='search-form'>
            <TextField 
              style={{width:'100%', height: '4rem', marginBottom: '1rem'}}
              className='search'
              id="search"
              type='text'
              placeholder='What did that kid just say?!'
              value={searchValue}
              onChange={handleChange}
              required
            />
            <Button style={{width:'60%'}}onClick={handleClick}>Search</Button>
          </form>
        </div>
      </WindowContent>
      {loading && 
        <div className='loading-container'>
          <Panel variant='well' style={{width: '100%', padding:'1rem'}}>
            <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Searching Term...</p>
            <LoadingIndicator isLoading style={{width:'100%'}}/>
          </Panel>
        </div>
      }
    </Window> 
    </>
  )
}

export default SearchForm