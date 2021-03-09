import React from 'react'
import Signup from '../SignUp/Signup'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import SearchForm from '../SearchForm/SearchForm'
import ResultsDisplay from '../ResultsDisplay/ResultsDisplay'
import CheatSheet from '../CheatSheet/CheatSheet'
import TopTerms from '../TopTerms/TopTerms'
import EmojiGuide from '../EmojiGuide/EmojiGuide'
import About from '../About/About'
import Resume from '../Resume/Resume'
import AccountInfo from '../AccountInfo/AccountInfo'
import NotFound from '../NotFound/NotFound'
import { useApp } from '../../contexts/AppContext'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from "react95/dist/themes/original";
import vaporTeal from "react95/dist/themes/vaporTeal";
import tokyoDark from "react95/dist/themes/tokyoDark";
import matrix from "react95/dist/themes/matrix";
import bee from "react95/dist/themes/bee";
import counterStrike from "react95/dist/themes/counterStrike";
import fxDev from "react95/dist/themes/fxDev";
import lilac from "react95/dist/themes/lilac";
import molecule from "react95/dist/themes/molecule";
import ninjaTurtles from "react95/dist/themes/ninjaTurtles";
import vermillion from "react95/dist/themes/vermillion";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import './App.css'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const App = () => {
  const { displayTheme, appError } = useApp()
  const { currentUser } = useAuth()
  let theme

  if(displayTheme === 'vaporTeal'){
    theme = vaporTeal
  } else if (displayTheme === 'tokyoDark'){
    theme = tokyoDark
  } else if (displayTheme === 'matrix') {
    theme = matrix
  } else if (displayTheme === 'bee') {
    theme = bee
  } else if (displayTheme === 'counterStrike') {
    theme = counterStrike
  } else if (displayTheme === 'fxDev') {
    theme = fxDev
  } else if (displayTheme === 'lilac') {
    theme = lilac
  } else if (displayTheme === 'molecule') {
    theme =  molecule
  } else if (displayTheme === 'ninjaTurtles') {
    theme = ninjaTurtles
  } else if (displayTheme === 'vermillion') {
    theme = vermillion
  } else {
    theme = original
  }
  
  return (
    <main className='App'>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Sidebar />
        {appError && <Redirect to='/error' />}
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/search' component={SearchForm} />
          <Route path='/results/:query'component={ResultsDisplay} />
          <Route path='/cheatsheet' component={CheatSheet} />
          <Route path='/hipterms' component={TopTerms} />
          <Route path='/emojiguide' component={EmojiGuide} />
          <Route path='/about' component={About} />
          <Route path='/account' component={AccountInfo} />
          <Route path='/resume' component={Resume} />
          <Route path='/error' component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
      {!currentUser && 
        <section className='welcome-screen'>
          <h1 className='welcome'>Welcome to</h1>
          <h2 className='title'>GenZtoA</h2>
          <p className='slogan'>translating what those darn kids are saying...</p>
        </section>
      }
    </main>
  );
}

export default App;