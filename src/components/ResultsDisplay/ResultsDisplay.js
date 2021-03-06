import React, { useState } from 'react' 
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import {
  Window,
  WindowHeader,
  WindowContent,
  Tab,
  Tabs,
  TabBody,
  Fieldset,
  Button

} from 'react95'

const ResultsDisplay = ({term}) => {
  const [activeTab, setActiveTab] = useState(1)
  const { termData, termName } = useAuth()
  const displayTermName = termName.replace(/%20/g, " ")

  const definitionTabs = termData.map((term, i) => <Tab value={i} key={i} id={i}>{`Definition ${i+1}`}</Tab>)

  const handleChange = (event) => {
    event.preventDefault()
    setActiveTab(parseInt(event.target.id))
  }

  return (
    <>
      <Window style={{ width:'60%', height:'80%', marginTop:'3.5rem', right:'10%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Results for {displayTermName}...</span>
          <Link to='/' style={{ width: '2rem' }}>
            <Button style={{ fontWeight: 'bold' }}>
              X
          </Button>
          </Link>
        </WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onClick={handleChange}>
            {definitionTabs}
          </Tabs>
          <TabBody style={{ height: 300 }}>
            {activeTab === 0 && (
              <div>
                <Fieldset label='Order:'>
                  <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
                  
                  <br />
                  
                </Fieldset>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <div>Accesories stuff here</div>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <div>Clothing stuff here</div>
              </div>
            )}
          </TabBody>
        </WindowContent>
      </Window>
    </>
  )
}

ResultsDisplay.propTypes = {
  term: PropTypes.string
}

export default ResultsDisplay

  // < Tab value = { 0} > Definition 1</Tab >
  //           <Tab value={1}>Definition 2</Tab>
  //           <Tab value={2}>Definition 3</Tab>