import React from 'react'
import { useApp } from '../../contexts/AppContext'
import PropTypes from 'prop-types'
import deleteButton from '../../assets/icons/delete.png'
import {
  Fieldset,
  Panel,
  Button
} from 'react95'

const FavoriteCard = ({data}) => {
  const { removeFavorite } = useApp()
  const {id, word, definition} = data
  
  function handleClick(event){
    event.preventDefault()  
    removeFavorite(parseInt(event.target.id))
  }
  
  return (
    <div style={{width:'13rem', height:'13rem', margin:'2rem'}}>
      <Fieldset label={`${word}`} style={{ marginBottom: '.5rem', width:'inherit' }} key={id}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Definition:</div>
        <Panel variant='well' style={{ width: '14rem', padding: '1rem', height: '6rem', overflow: 'scroll' }}>
          {definition}
        </Panel>
        <Button id={id} onClick={handleClick}><img src={deleteButton} alt='remove from cheet sheat'/></Button>
      </Fieldset>
    </div>
  )
}

FavoriteCard.propTypes = {
  data: PropTypes.object
};

export default FavoriteCard