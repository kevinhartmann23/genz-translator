import React, { useState } from 'react' 
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import {
  Window,
  WindowHeader,
  WindowContent,
  Tab,
  Tabs,
  TabBody,
  Fieldset,

} from 'react95'

const ResultsDisplay = ({term}) => {
  const [activeTab, setActiveTab] = useState(1)
  const { termData, termName } = useAuth()
  const displayTermName = termName.replace(/%20/g, " ")

  const definitionTabs = termData.map((term, i) => <Tab value={i} id={i}>{`Definition ${i+1}`}</Tab>)

  const handleChange = (event) => {
    event.preventDefault()
    setActiveTab(parseInt(event.target.id))
  }

  return (
    <>
      <Window style={{ width:'60%', height:'80%', marginTop:'3.5rem' }}>
        <WindowHeader>Results for {displayTermName}...</WindowHeader>
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