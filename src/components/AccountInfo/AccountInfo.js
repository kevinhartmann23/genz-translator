import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useApp } from '../../contexts/AppContext'
import userIcon from '../../assets/icons/user.png'
import checkMark from '../../assets/icons/check.png'
import xMark from '../../assets/icons/x.png'

import {
  Window,
  WindowHeader,
  WindowContent,
  Tab,
  Tabs,
  TabBody,
  Button,
  TextField,
  Fieldset,
  Avatar,
  Select
} from 'react95'

function AccountInfo() {
  const { updateTheme, displayTheme } = useApp()
  const { currentUser, updateName } = useAuth()
  const [activeTab, setActiveTab] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [theme, setTheme] = useState(displayTheme)
  const [success, setSuccess] = useState('')
  let displayName
  let photoURL
  let email
  let emailVerified
  let metadata
  let lastSignInTime
  let creationTime
  
  if(currentUser){
    displayName = currentUser.displayName
    photoURL = currentUser.photoURL
    email = currentUser.email
    emailVerified = currentUser.emailVerified
    metadata = currentUser.metadata
    lastSignInTime = metadata.lastSignInTime
    creationTime = metadata.creationTime
  }

  const options = [
    { value: 'original', label: 'original' },
    { value: 'vaporTeal', label: 'teal' },
    { value: 'tokyoDark', label: 'dark' },
    { value: 'matrix', label: 'matrix' },
    { value: 'bee', label: 'yellow' },
    { value: 'counterStrike', label: 'counter strike' },
    { value: 'fxDev', label: 'Dev' },
    { value: 'lilac', label: 'lilac' },
    { value: 'molecule', label: 'molecule' },
    { value: 'ninjaTurtles', label: 'ninja turtles' },
    { value: 'vermillion', label: 'vermillion' }
  ];

  const handleChange = (event) => {
    event.preventDefault()
    setActiveTab(parseInt(event.target.id))
  }

  const handleInput = (event) => {
    event.preventDefault()
    setInputValue(event.target.value)
  }

  const handleSelect = (event) => {
    event.preventDefault()
    setTheme(event.target.value)
  }

  const changeTheme = (event) => {
    event.preventDefault()
    updateTheme(theme)
    setSuccess(`Theme has been updated to ${theme}`)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await updateName(inputValue)
      await setSuccess('Your account has been updated!')
    } catch (err) {

    }
  }

  useEffect(() => {
    setSuccess('')
    setInputValue('')
  }, [activeTab])

  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      {currentUser && 
      <Window style={{ width: '40%', height: '90%', marginTop: '3.5rem', right: '10%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Account</span>
          <Link to='/' style={{ width: '2rem' }}>
            <Button style={{ fontWeight: 'bold' }}>
              X
        </Button>
          </Link>
        </WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onClick={handleChange} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Tab value={0} id='0'>Account Information</Tab>
            <Tab value={1} id='1'>Setting & Security</Tab>
          </Tabs>
          <TabBody style={{ height: 'auto' }}>
            {activeTab === 0 && 
              <div>
                <Fieldset label="Account Information">
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'6.25rem', marginLeft:'2rem'}}>
                    {photoURL && <Avatar size={100} src={photoURL} />}
                    {!photoURL && < Avatar size={100} src={userIcon} />}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%', textAlign:'center', justifyContent:'center' }}>
                      <p style={{ marginRight: '.125rem', fontSize:'.75rem' }}>Verified:</p>
                      <img style={{ width: '1rem', height: '1rem' }} src={emailVerified ? checkMark : xMark} alt='item unsaved' />
                    </div> 
                  </div>
                  <label htmlFor='name'>Name:</label>
                  <TextField id='name' defaultValue={displayName ? displayName : 'unknown'} disabled fullWidth />
                  <label htmlFor='email'>Email:</label>
                  <TextField id='email' defaultValue={email ? email : 'unkown'} disabled fullWidth />
                  <label htmlFor='last-signin'>Last Sign In:</label>
                  <TextField id='last-signin' defaultValue={lastSignInTime ? lastSignInTime : 'unknown'} disabled fullWidth />
                  <label htmlFor='account-created'>Account Created:</label>
                  <TextField id='account-created' defaultValue={creationTime ? creationTime : 'unknown'} disabled fullWidth />  
                </Fieldset>
              </div>
            }
            {activeTab === 1 && 
              <div>
                <Fieldset label="Account Information">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom:'1rem' }}>
                      {photoURL && <Avatar size={100} src={photoURL} />}
                      {!photoURL && < Avatar size={100} src={userIcon} />}
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                        <p style={{ marginRight: '.125rem', fontSize: '.75rem' }}>Verified:</p>
                        <img style={{ width: '1rem', height: '1rem' }} src={emailVerified ? checkMark : xMark} alt='item unsaved' />
                      </div>
                      <Button disabled id='verify-email' style={{ marginBottom: '1rem', marginTop:'1rem', height: '3rem' }}>Verify: {email}</Button>
                    </div>
                    <label htmlFor='name'>Update Name:</label>
                    <TextField id='name' style={{marginBottom: '.25rem'}} placeholder={displayName ? displayName : 'unknown'} value={inputValue} onChange={handleInput} fullWidth />
                    <Button style={{ marginBottom: '1rem' }} onClick={handleSubmit}>Update</Button>
                <Fieldset label='Set Theme:' style={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                      <Select
                        defaultValue={displayTheme}
                        value={theme}
                        options={options}
                        menuMaxHeight={160}
                        width={200}
                        onChange={handleSelect}
                      />
                      <Button onClick={changeTheme}>Apply</Button>
                    </Fieldset>
                  </Fieldset>
              </div>
            }
          </TabBody>
          <div className='footer-container-account' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <p style={{textAlign:'center', width: '100%'}}>{success}</p>
            <p style={{textAlign:'center', width: '100%'}} className='footer-title'>My Account</p>
          </div>
        </WindowContent>
      </Window>
      }
    </>
  )
}

export default AccountInfo;