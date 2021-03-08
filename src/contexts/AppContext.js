import React, { useContext, useState } from 'react'
import apiCalls from './apiCalls'

const Context = React.createContext()

export function useApp() {
  return useContext(Context)
}

export default function AppProvider({ children }) {
  const [termName, setTermName] = useState('')
  const [termData, setTermData] = useState([])
  const [appError, setAppError] = useState()
  const [message, setMessage] = useState()
  const [userFavorites, setUserFavorites] = useState([])
  const [displayTheme, setDisplayTheme] = useState('original')

  function sortIncomingData(data) {
    const results = data.sort((a, b) => b.thumbs_up - a.thumbs_up)
    return [results[0], results[1], results[2]]
  }

  async function querySearchTerms(term) {
    setTermName(term)

    try {
      const result = await apiCalls.requestTermsInfo(term).list
      if(!result.length){
        setMessage(`No results found for ${term.replace(/%20/g, " ")}...`)
      } else {
        setMessage()
        const sortedData = await sortIncomingData(data)
        await setTermData(sortedData)
      }
    } catch (error) {
      setAppError(error)
    }
  }

  function resetSearchData() {
    setTermData([])
    setTermName('')
    setAppError()
    setMessage()
  }

  function storeUserFavorites(term) {
    const { definition, word } = term
    const favorite = {
      id: userFavorites.length + 1,
      word,
      definition,
    }
    setUserFavorites([...userFavorites, favorite])
  }

  function removeFavorite(id) {
    const newFavorites = userFavorites.filter(term => term.id !== id)
    setUserFavorites(newFavorites)
  }

  function updateTheme(theme) {
    setDisplayTheme(theme)
  }

  const value = {
    querySearchTerms,
    storeUserFavorites,
    removeFavorite,
    resetSearchData,
    updateTheme,
    setAppError,
    userFavorites,
    displayTheme,
    termData,
    termName,
    appError,
    message
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}