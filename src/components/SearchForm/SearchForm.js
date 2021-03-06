import React, {useState, useEffect} from 'react' 
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useApp } from '../../contexts/AppContext'
import searchTerms from '../../assets/icons/search_terms.png'
import './SearchForm.css'

import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  TextField,
  LoadingIndicator,
  Progress,
  Panel
} from 'react95'

const SearchForm = () => {
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearch] = useState('')
  const [formatValue, setFormatValue] = useState('')
  const { currentUser } = useAuth()
  const { querySearchTerms, termData, resetSearchData, setAppError, message, setMessage } = useApp()

  
  const handleChange = (event) => {
    event.preventDefault()
    resetSearchData()
    setSearch(event.target.value)
  }

   async function handleClick(event) {
    event.preventDefault()

    try{
      setLoading(true)
      const formattedTerm = await searchValue.replace(/ /g, "%20")
      await setFormatValue(formattedTerm)
      await querySearchTerms(formattedTerm)
      await setLoading(false)
    } catch(error){
      setAppError(true)
    }
  }

  useEffect(() => {
    if(termData.length > 0){
      resetSearchData()
      setSearch('')
    }
  }, [])

  useEffect(() => {
    resetSearchData()
  }, [searchValue])

  
  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      {currentUser && 
      <Window className='window' style={{ width: '40rem', height:'auto', alignSelf: 'center', display:'flex', flexDirection:'column', marginLeft:'10%', marginRight: '10%'}}>
          <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <span>Search</span>
          <Link to='/' style={{width:'2rem'}}>
            <Button className='back-button' style={{ fontWeight: 'bold' }}>
              X
            </Button>
          </Link>
        </WindowHeader>
        <WindowContent>
          <div className='search-container' style={{marginBottom:'1rem'}}>
            <img className='search-icon' src={searchTerms} alt='search icon'/>
            <form className='search-form' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
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
              <Button className='search-button' style={{width:'50%', textAlign:'center'}}onClick={handleClick}>Search</Button>
            </form>
          </div>
          {loading && 
            <div className='loading-container loading'>
              <Panel variant='well' style={{width: '100%', padding:'1rem'}}>
                <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Searching Term...</p>
                <LoadingIndicator isLoading style={{width:'100%', height: '2rem'}}/>
              </Panel>
            </div>
          }
          {termData.length > 0 && 
            <div className='loading-container results' style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <Panel variant='well' style={{ width: '100%', padding: '.5rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center' }}>
                  <p className='search-results' style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{`Top ${termData.length} terms found for ${formatValue.replace(/%20/g, " ")}...`}</p>
                  <Progress hideValue value={100} style={{ width: '100%', height:'2rem' }} />
                  <Link to={`/results/${formatValue}`}>
                    <Button className='view-results-button' style={{ width: '50%' }}>Results</Button>
                  </Link>
                </Panel>
              </div>
          }
          {message.length > 0 &&
            <div className='loading-container message'>
              <Panel variant='well' style={{ width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{message}</p>
              </Panel>
            </div>
          }
        </WindowContent>
      </Window> 
      }
    </>
  )
}

export default SearchForm