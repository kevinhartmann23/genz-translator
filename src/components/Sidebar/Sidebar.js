import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import cheatSheet from '../../assets/icons/cheat_sheet.png'
import emojiGuide from '../../assets/icons/emoji_guide.png'
import topTerms from '../../assets/icons/top_terms.png'
import searchTerms from '../../assets/icons/search_terms.png'
import './Sidebar.css'

const Sidebar = () => {
  const { currentUser } = useAuth()

  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      {currentUser &&  
      <div className="sidebar">
        <section className='sidebar-container'>
          <Link to='/search'>
            <img className='icon' id='search-terms' src={searchTerms} alt='Search for a term'/>
            <label htmlFor='search-terms'>Search</label>
          </Link>
          <Link to='/cheat_sheet'>
            <img className='icon' id='cheat-sheet' src={cheatSheet} alt='View my cheatsheet'/>
            <label htmlFor='cheat-sheet'>Cheat Sheet</label>
          </Link>
          <Link to='/emoji_guide'>
            <img className='icon' id='emoji-guide' src={emojiGuide} alt='View emoji guide'/>
            <label htmlFor='emoji-guide'>Emoji Guide</label>
          </Link>
          <Link to='/hip_terms'>
            <img className='icon' id='top-terms' src={topTerms} alt='View hip terms'/>
            <label htmlFor='top-terms'>Hip Terms</label>
          </Link>
        </section>
      </div>
      }
    </>
  )
}

export default Sidebar