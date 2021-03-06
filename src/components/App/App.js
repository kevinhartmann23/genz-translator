import React from 'react'
import Signup from '../SignUp/Signup'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import SearchForm from '../SearchForm/SearchForm'
import ResultsDisplay from '../ResultsDisplay/ResultsDisplay'
import AuthProvider from '../../contexts/AuthContext'
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from "react95/dist/themes/original";
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
  return (
    <main className='App'>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AuthProvider>
          <Header />
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/search' component={SearchForm} />
            <Route 
              path='/results/:query'
              component={ResultsDisplay} 
              />
          </Switch>
        </AuthProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;