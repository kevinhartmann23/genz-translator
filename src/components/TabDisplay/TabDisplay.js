import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import addButton from '../../assets/icons/add.png'
import checkMark from '../../assets/icons/check.png'
import xMark from '../../assets/icons/x.png'

import {
  Window,
  WindowHeader,
  WindowContent,
  Tab,
  Tabs,
  TabBody,
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
  const { storeUserFavorites, termData } = useAuth()

  const handleClick = (event) => {
    event.preventDefault()
    setSaveState(checkMark)
    const favoritedTerm = termData[parseInt(event.target.id)]
    storeUserFavorites(favoritedTerm)
  }

  return (
    <div>
      <Fieldset label={`${word}`} style={{ marginBottom: '.5rem' }}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Definition:</div>
        <Panel variant='well' style={{ width: '100%', height: 'auto', padding: '1rem' }}>
          {definition}
        </Panel>
      </Fieldset>
      <Fieldset label='Example:' style={{ marginBottom: '.5rem' }}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Used In Sentence(s):</div>
        <Panel variant='well' style={{ width: '100%', padding: '1rem', height: '6rem', overflow: 'scroll' }}>
          {example}
        </Panel>
      </Fieldset>
      <Fieldset label='Other:' style={{ marginBottom: '.5rem' }}>
        <div className='other-panel' style={{ width: '100%' }}>
          <Panel variant='well' style={{ width: '100%', height: '4rem', padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <List inline style={{ margin: '.5rem', height: '3rem' }}>
              <ListItem>
                {`Thumbs Up: ${thumbs_up}`}
              </ListItem>
              <Divider orientation='vertical' size='2rem' />
              <ListItem>
                {`Thumbs Down: ${thumbs_down}`}
              </ListItem>
              <Divider orientation='vertical' size='2rem' />
              <ListItem>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <p style={{ marginRight: '.125rem' }}>Saved:</p>
                  <img style={{ width: '1.3rem', height: '1.3rem' }} src={savedState} alt='item unsaved' />
                </div>
              </ListItem>
            </List>
            <Tooltip text='Save to Cheet Sheet' enterDelay={100} leaveDelay={100}>
              <Button id={id} style={{ width: '3.5rem', height: '3.5rem' }} onClick={handleClick}><img style={{ height: '2.5rem', width: '2.5rem' }} src={addButton} alt='save to cheatsheet' /></Button>
            </Tooltip>
          </Panel>
        </div>
      </Fieldset>
    </div>
  )
}

TabDisplay.propTypes = {
  term: PropTypes.object
};



export default TabDisplay