const baseUrl = 'http://localhost:3000/login'
const userEmail = 'test@test.com'
const userPassword = 'testing'
const apiUrl = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term='

describe('Results Display', () => {
  it('Should visit search path on clicking the search icon', () => {
    cy
      .visit(baseUrl)
      .get('.email').type(userEmail)
      .get('.password').type(userPassword)
      .get('.form-submit-button').click()
  })

  it('Should display search results', () => {
    cy.intercept('GET', `${apiUrl}lit`, { fixture: 'searchLitData' })

    cy
      .get('#search-terms').click()
      .get('input').type('lit')
      .get('.search-button').click()
      .get('.view-results-button').click()
  })

  it('Should display result information', () => {
    cy
      .get('.term-definition').should('have.text', 'When [something] is [turned up] or [popping] ...')
      .get('.term-example').should('have.text', 'John : did you go to that party last night\n\n[Daquan] : [yes] [that shit] was lit')
      .get('.term-up').should('have.text', 'Thumbs Up: 11938')
      .get('.term-down').should('have.text', 'Thumbs Down: 2672')
  })

  it('Should save results to cheat sheet if user chooses to', () => {
    cy 
      .get('.save-button').click()
      .get('.saved-message').should('have.text', 'This message is on your cheat sheet!')
  })

  it('Should display saved items to user cheatsheet', () => {
    cy 
      .get('.sidebar')
      .get('#cheat-sheet').click()
      .url().should('eq', 'http://localhost:3000/cheatsheet')
  })
})

describe('Cheat Sheet', () => {
  it('Should show the user the saved definition', () => {
    cy
      .get('.fav-definition').should('have.text', 'When [something] is [turned up] or [popping] ...')
  })

  it('Should delete a saved term', () => {
    cy
      .get('.delete-button').click()
      .get('.no-favorites').should('have.text', 'No Favorites Yet!')
  })
  
  
  
  it('Should allow user to logout at anytime', () => {
    cy
      .get('.start-button').click()
      .get('.logout-button').click()
  
      .url().should('eq', baseUrl)
  })

})
