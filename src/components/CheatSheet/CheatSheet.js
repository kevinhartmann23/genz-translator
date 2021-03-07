import React, { useEffect } from 'react' 
import FavoriteCard from '../FavoriteCard/FavoritesCard'
import { useAuth } from '../../contexts/AuthContext'
import { useApp } from '../../contexts/AppContext'
import { Link, Redirect } from 'react-router-dom'
import {
  Window,
  WindowHeader,
  WindowContent,
  Button
} from 'react95'

const CheatSheet = () => {
  const { currentUser } = useAuth()
  const { userFavorites } = useApp()
  
  let favoritesDisplay = userFavorites.map(fav => <FavoriteCard data={fav}/>)
  
  useEffect(() => {
   favoritesDisplay = userFavorites.map(fav => <FavoriteCard data={fav} />)
  }, [userFavorites])

  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      {currentUser && 
      <Window style={{ width: '85%', height: '90%', marginTop: '3.5rem', right: '6%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>My Lingo Cheat Sheet!</span>
          <Link to='/' style={{ width: '2rem' }}>
            <Button style={{ fontWeight: 'bold' }}>
              X
            </Button>
          </Link>
        </WindowHeader>
        <WindowContent style={{display:'flex', flexWrap:'wrap', justifyContent:'center', width:'100%', height:'95%', padding:'0', overflow:'scroll'}}>
          {favoritesDisplay}
        </WindowContent>
      </Window>
      }
    </>
  )
}

export default CheatSheet