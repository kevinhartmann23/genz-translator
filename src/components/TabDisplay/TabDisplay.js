import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApp } from '../../contexts/AppContext'
import addButton from '../../assets/icons/add.png'
import checkMark from '../../assets/icons/check.png'
import xMark from '../../assets/icons/x.png'

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
  const { storeUserFavorites, termData } = useApp()

  const handleClick = (event) => {
    event.preventDefault()
    setSaveState(checkMark)
    setDisabled(true)
    const favoritedTerm = termData[parseInt(event.target.id)]
    storeUserFavorites(favoritedTerm)
  }

  return (
    <div>
      <Fieldset label={`${word}`} style={{ marginBottom: '.5rem' }}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Definition:</div>
        <Panel className='term-definition' variant='well' style={{ width: '100%', height: 'auto', padding: '1rem' }}>
          {definition}
        </Panel>
      </Fieldset>
      <Fieldset label='Example:' style={{ marginBottom: '.5rem' }}>
        <div style={{ padding: '0.5em 0 0.5em 0' }}>Used In Sentence(s):</div>
        <Panel className='term-example' variant='well' style={{ width: '100%', padding: '1rem', height: '6rem', overflow: 'scroll' }}>
          {example}
        </Panel>
      </Fieldset>
      <Fieldset label='Other:' style={{ marginBottom: '.5rem' }}>
        <div className='other-panel' style={{ width: '100%' }}>
          <Panel variant='well' style={{ width: '100%', height: '4rem', padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <List inline style={{ margin: '.5rem', height: '3rem' }}>
              <ListItem className='term-up'>
                {`Thumbs Up: ${thumbs_up}`}
              </ListItem>
              <Divider orientation='vertical' size='2rem' />
              <ListItem className='term-down'>
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
            {!disabled && <Tooltip text='Save to Cheet Sheet' enterDelay={100} leaveDelay={100}>
              <Button className='save-button' id={id} style={{ width: '3.5rem', height: '3.5rem' }} onClick={handleClick}><img style={{ height: '2.5rem', width: '2.5rem' }} src={addButton} alt='save to cheatsheet' /></Button>
            </Tooltip>
            }
            {disabled && <Tooltip text='Term Saved!' enterDelay={100} leaveDelay={100}>
              <Panel variant='well' style={{ width: '3.5rem', height: '3.5rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <img style={{ height: '2.5rem', width: '2.5rem' }} src={addButton} alt='save to cheatsheet' />
              </Panel>
            </Tooltip>
            }
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