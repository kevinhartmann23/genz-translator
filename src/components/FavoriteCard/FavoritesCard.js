import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import PropTypes from 'prop-types'
import deleteButton from '../../assets/icons/delete.png'
import {
  Fieldset,
  Panel,
  Button
} from 'react95'

const FavoriteCard = ({data}) => {
  const {removeFavorite} = useAuth()
  const {id, word, definition} = data
  
  function handleClick(event){
    event.preventDefault()  
    removeFavorite(parseInt(event.target.id))
  }
  
  return (
    <div>
      <Fieldset label={`${word}`} style={{ marginBottom: '.5rem' }} key={id}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Definition:</div>
        <Panel variant='well' style={{ width: '100%', padding: '1rem', height: '6rem', overflow: 'scroll' }}>
          {definition}
        </Panel>
      </Fieldset>
      <Button id={id} onClick={handleClick}><img src={deleteButton} alt='remove from cheet sheat'/></Button>
    </div>
  )
}

FavoriteCard.propTypes = {
  data: PropTypes.object
};

export default FavoriteCard