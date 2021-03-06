import React, { useContext, useState, useEffect } from 'react'
import apiCalls from './apiCalls'
import { auth, googleProvider, twitterProvider, githubProvider } from './firebase'

const Context = React.createContext()

export function useAuth() {
  return useContext(Context)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [displayName, setDisplayName] = useState('User')
  const [termName, setTermName] = useState('')
  const [termData, setTermData] = useState([])

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signOut() {
    setCurrentUser()
    return auth.signOut()
  }

  async function signInWithPopup(provider) {
    let verifiedProvider
    
    if (provider === 'google') {
      verifiedProvider = googleProvider
    } else if (provider === 'twitter') {
      verifiedProvider = twitterProvider
    } else if (provider === 'github') {
      verifiedProvider = githubProvider
    }

    try {
      const result = await auth.signInWithPopup(verifiedProvider)
      const credential = await result.credential
      const token = await credential.accessToken
      await setCurrentUser(auth.currentUser)
    } catch (error) {
      alert(error.message)
    }
  }

  function updateName(name) {
    auth.currentUser.updateProfile({
      displayName: name,
    })
    setDisplayName(name)
  }

  function sortIncomingData(data) {
    const results = data.sort((a,b) => b.thumbs_up - a.thumbs_up)
    return [results[0], results[1], results[2]]
  }

  async function querySearchTerms(terms) {
    setTermName(terms)
    
    try {
     const result = await apiCalls.requestTermsInfo(terms)
     const data = await result.list
     const sortedData = await sortIncomingData(data)
     await setTermData(sortedData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const changeUserState = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
        setDisplayName(user.displayName)
      }
    })
    return changeUserState
  }, [])

  const value = {
    currentUser,
    displayName,
    signOut,
    signUp,
    login,
    signInWithPopup,
    updateName,
    querySearchTerms,
    termData,
    termName
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}