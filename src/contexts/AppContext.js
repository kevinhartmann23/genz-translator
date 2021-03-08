import React, { useContext, useState } from 'react'
import apiCalls from './apiCalls'

const Context = React.createContext()

export function useApp() {
  return useContext(Context)
}

export default function AppProvider({ children }) {
  const [termName, setTermName] = useState('')
  const [termData, setTermData] = useState([])
  const [error, setError] = useState(false)
  const [userFavorites, setUserFavorites] = useState([])
  const [displayTheme, setDisplayTheme] = useState('original')

  function sortIncomingData(data) {
    const results = data.sort((a, b) => b.thumbs_up - a.thumbs_up)
    return [results[0], results[1], results[2]]
  }

  async function querySearchTerms(terms) {
    setTermName(terms)

    try {
      const result = await apiCalls.requestTermsInfo(terms)
      if(!result.length){
        setError(true)
      } else {
        setError(false)
        const sortedData = await sortIncomingData(result)
        await setTermData(sortedData)
      }
    } catch (error) {
      setError(true)
    }
  }

  function resetSearchData() {
    setTermData([])
    setTermName('')
    setError(false)
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
    setError,
    userFavorites,
    displayTheme,
    termData,
    termName,
    error
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}