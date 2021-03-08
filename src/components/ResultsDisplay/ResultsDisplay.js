import React, { useState, useEffect } from 'react' 
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useApp } from '../../contexts/AppContext'
import TabDisplay from '../TabDisplay/TabDisplay'

import './ResultsDisplay.css'

import {
  Window,
  WindowHeader,
  WindowContent,
  Tab,
  Tabs,
  TabBody,
  Button
} from 'react95'

const ResultsDisplay = () => {
  const [activeTab, setActiveTab] = useState(0)
  const { currentUser } = useAuth()
  const { termData, termName, resetSearchData } = useApp()

  const displayTermName = termName.replace(/%20/g, " ")

  const definitionTabs = termData.map((term, i) => <Tab value={i} key={i} id={i}>{`Definition ${i+1}`}</Tab>)

  const wordInfo = termData.map((term, i) => <TabDisplay key={i} term={term} id={i} />)

  const handleChange = (event) => {
    event.preventDefault()
    setActiveTab(parseInt(event.target.id))
  }

  useEffect(() => {
      setActiveTab(0)
  }, [resetSearchData])

  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      {currentUser && 
      <Window style={{ width:'60%', height:'90%', marginTop:'3.5rem', right:'10%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Results for {displayTermName}...</span>
          <Link to='/' style={{ width: '2rem' }}>
            <Button onClick={resetSearchData} style={{ fontWeight: 'bold' }}>
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
          </div>
        </WindowContent>
      </Window>
      }
    </>
  )
}

export default ResultsDisplay