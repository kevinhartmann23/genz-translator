import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApp } from '../../contexts/AppContext'
import addButton from '../../assets/icons/add.png'
import checkMark from '../../assets/icons/check.png'
import xMark from '../../assets/icons/x.png'
import up from '../../assets/icons/up.png'
import down from '../../assets/icons/down.png'

import {
  Fieldset,
  Button,
  Panel,
  Divider,
  List,
  ListItem,
  Tooltip
} from 'react95'

const TabDisplay = ({term, id}) => {
  const {word, definition, example, thumbs_up, thumbs_down, } = term
  const [savedState, setSaveState] = useState(xMark)
  const [disabled, setDisabled] = useState(false)
  const { storeUserFavorites, termData, message, setMessage, userFavorites } = useApp()

  const checkSaved = () => {
    const validateTerm = userFavorites.find(info => info.definition === definition)
    
    if(validateTerm){
      setMessage('This message is on your cheat sheet!')
      setSaveState(checkMark)
      setDisabled(true)
    }
  }
  
  const handleClick = (event) => {
    event.preventDefault()
    setSaveState(checkMark)
    setMessage('This message is on your cheat sheet!')
    setDisabled(true)
    const favoritedTerm = termData[parseInt(event.target.id)]
    storeUserFavorites(favoritedTerm)
  }

  useEffect(() => {
    checkSaved()
  }, [])

  return (
    <div>
      <Fieldset label={`${word}`} style={{ marginBottom: '.5rem' }}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Definition:</div>
        <Panel className='term-definition' variant='well' style={{ width: '100%', height: '2.5rem', padding: '.5rem', overflow:'scroll' }}>
          {definition}
        </Panel>
      </Fieldset>
      <Fieldset label='Example:' style={{ marginBottom: '.5rem' }}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Used In Sentence(s):</div>
        <Panel className='term-example' variant='well' style={{ width: '100%', padding: '.5rem', height: '3rem', overflow: 'scroll' }}>
          {example}
        </Panel>
      </Fieldset>
      <Fieldset label='Other:' style={{ marginBottom: '.5rem' }}>
        <div className='other-panel' style={{ width: '100%', height: '3rem', padding: '0rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <List inline style={{ margin: '0rem', height: '3rem' }}>
              <ListItem className='term-up'>
                <img src={up} alt='likes' style={{ height: '20px' }} />
                {thumbs_up}
              </ListItem>
              <Divider orientation='vertical' size='2rem' />
              <ListItem className='term-down'>
                <img src={down} alt='dislikes' style={{height:'20px'}}/>
                {thumbs_down}
              </ListItem>
              <Divider orientation='vertical' size='2rem' />
              <ListItem>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <img style={{ width: '20px', height: '20px' }} src={savedState} alt='item unsaved' />
                </div>
              </ListItem>
            </List>
            {!disabled && <Tooltip text='Save to Cheet Sheet' enterDelay={100} leaveDelay={100}>
              <Button className='save-button' id={id} style={{ width: '3rem', height: '3rem' }} onClick={handleClick}><img style={{ height: '20px', width: '20px' }} src={addButton} alt='save to cheatsheet' /></Button>
            </Tooltip>
            }
            {disabled && <Tooltip text='Term Saved!' enterDelay={100} leaveDelay={100}>
              <Panel variant='well' style={{ width: '3.5rem', height: '3.5rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <img style={{ height: '2.5rem', width: '2.5rem' }} src={addButton} alt='save to cheatsheet' />
              </Panel>
            </Tooltip>
            }
        </div>
      </Fieldset>
      {message && <p className='saved-message' style={{width:'100%', textAlign:'center'}}>{message}</p>}
    </div>
  )
}

TabDisplay.propTypes = {
  term: PropTypes.object
};



export default TabDisplay