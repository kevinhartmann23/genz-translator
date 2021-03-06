import React, { useEffect } from 'react' 
import FavoriteCard from '../FavoriteCard/FavoritesCard'
import { useAuth } from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'
import {
  Window,
  WindowHeader,
  WindowContent,
  Button
} from 'react95'

const CheatSheet = () => {
  const { userFavorites } = useAuth()
  
  let favoritesDisplay = userFavorites.map(fav => <FavoriteCard data={fav}/>)
  
  useEffect(() => {
   favoritesDisplay = userFavorites.map(fav => <FavoriteCard data={fav} />)
  }, [userFavorites])

  return (
    <>
      <Window style={{ width: '60%', height: '90%', marginTop: '3.5rem', right: '10%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>My Lingo Cheat Sheet!</span>
          <Link to='/' style={{ width: '2rem' }}>
            <Button style={{ fontWeight: 'bold' }}>
              X
            </Button>
          </Link>
        </WindowHeader>
        <WindowContent>
          {favoritesDisplay}
        </WindowContent>
      </Window>
    </>
  )
}

export default CheatSheet