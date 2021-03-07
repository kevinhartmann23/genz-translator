import React, { useContext, useState } from 'react'
import apiCalls from './apiCalls'

const Context = React.createContext()

export function useApp() {
  return useContext(Context)
}

export default function AppProvider({ children }) {
  const [termName, setTermName] = useState('')
  const [termData, setTermData] = useState([])
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
      const data = await result.list
      const sortedData = await sortIncomingData(data)
      await setTermData(sortedData)
    } catch (error) {
      console.log(error)
    }
  }

  function resetSearchData() {
    setTermData([])
    setTermName('')
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
    userFavorites,
    querySearchTerms,
    storeUserFavorites,
    removeFavorite,
    resetSearchData,
    updateTheme,
    displayTheme,
    termData,
    termName
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}