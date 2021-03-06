import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import addButton from '../../assets/icons/add.png'
import checkMark from '../../assets/icons/check.png'
import xMark from '../../assets/icons/x.png'

import './ResultsDisplay.css'

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

const ResultsDisplay = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [savedState, setSaveState] = useState(xMark)
  const { termData, termName, storeUserFavorites, resetSearchData } = useAuth()
  const displayTermName = termName.replace(/%20/g, " ")

  const definitionTabs = termData.map((term, i) => <Tab value={i} key={i} id={i}>{`Definition ${i+1}`}</Tab>)

  const wordInfo = termData.map((term, i) => {
    return (
        <div>
          <Fieldset label={`${term.word}`} style={{marginBottom:'.5rem'}}>
            <div style={{ padding: '0.5em 0 0.5em 0' }}>Definition:</div>
            <Panel variant='well' style={{ width: '100%', height: 'auto', padding: '1rem' }}>
              {term.definition}
            </Panel>
          </Fieldset>
          <Fieldset label='Example:' style={{marginBottom:'.5rem'}}>
            <div style={{ padding: '0.5em 0 0.5em 0' }}>Used In Sentence(s):</div>
          <Panel variant='well' style={{ width: '100%', padding: '1rem', height: '6rem', overflow: 'scroll' }}>
              {term.example}
            </Panel>
          </Fieldset>
        <Fieldset label='Other:' style={{ marginBottom: '.5rem'}}>
          <div className='other-panel' style={{ width: '100%'}}>
            <Panel variant='well' style={{ width: '100%', height: '4rem', padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
                <List inline style={{margin:'.5rem', height:'3rem'}}>
                  <ListItem>
                    {`Thumbs Up: ${term.thumbs_up}`}
                  </ListItem>
                  <Divider orientation='vertical' size='2rem'/>
                  <ListItem>
                    {`Thumbs Down: ${term.thumbs_down}`}
                  </ListItem>
                  <Divider orientation='vertical' size='2rem' />
                  <ListItem>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                      <p style={{marginRight:'.125rem'}}>Saved:</p>
                      <img style={{ width: '1.3rem', height: '1.3rem' }} src={savedState} alt='item unsaved' />
                    </div>
                  </ListItem>
                </List>
              </Panel>
            </div>
          </Fieldset>
        </div>
    )
  })

  const handleChange = (event) => {
    event.preventDefault()
    setActiveTab(parseInt(event.target.id))
  }

  const handleClick = (event) => {
    event.preventDefault()
    setSaveState(checkMark)
    const favoritedTerm = termData[activeTab]
    storeUserFavorites(favoritedTerm)
  }

  useEffect(() => {
    if (termData.length === 0) {
      resetSearchData()
      setSaveState(xMark)
      setActiveTab(0)
    }
  }, [])

  return (
    <>
      <Window style={{ width:'60%', height:'90%', marginTop:'3.5rem', right:'10%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Results for {displayTermName}...</span>
          <Link to='/' style={{ width: '2rem' }}>
            <Button style={{ fontWeight: 'bold' }}>
              X
          </Button>
          </Link>
        </WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onClick={handleChange} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            {definitionTabs}
          </Tabs>
          <TabBody style={{ height: 'auto' }}>
            {activeTab === 0 && wordInfo[0]}
            {activeTab === 1 && wordInfo[1]}
            {activeTab === 2 && wordInfo[2]}
          </TabBody>
          <div className='footer-container'>
            <p className='footer-title'>Add To Cheet Sheet</p>
            <Tooltip text='Save to Cheet Sheet' enterDelay={100} leaveDelay={100}>
              <Button style={{ width: '3.5rem', height: '3.5rem' }} onClick={handleClick}><img style={{ height: '2.5rem', width: '2.5rem' }} src={addButton} alt='save to cheatsheet' /></Button>
            </Tooltip>
          </div>
        </WindowContent>
      </Window>
    </>
  )
}

export default ResultsDisplay