const baseUrl = 'http://localhost:3000/login'
const userEmail = 'test@test.com'
const userPassword = 'testing'

describe('Search From', () => {
  it('Should visit search path on clicking the search icon', () => {
    cy 
      .visit(baseUrl)
      .get('.email').type(userEmail)
      .get('.password').type(userPassword)
      .get('.form-submit-button').click()

      .get('#search-terms').click()
      .url().should('eq', 'http://localhost:3000/search')
  })

  it('Should allow a user to type in a search term', () => {
    cy
      .get('input').type('akjsdhfkga')
      .get('.search-button').click()
  })

  it('Should display an error message if results are not found', () => {
    cy
      .get('.loading-container')
      .get('p').should('have.text', 'No results found for akjsdhfkga...')

  })

  it('Should allow user to direct back to dashboard', () => {
    cy
      .get('.back-button').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('Should allow user to submit their search', () => {
    cy 
      .get('#search-terms').click()
      .get('input').type('lit')
      .get('.search-button').click()

  })

  it('Should display results if results are found', () => {
    cy
      .get('.results')
      .get('.search-results').should('have.text', 'Top 3 terms found for lit...')
      .get('.view-results-button').click()
  })

  it('Should direct user to results display', () => {
    cy
      .url().should('eq', 'http://localhost:3000/results/lit')
  })

  it('Should allow user to logout at anytime', () => {
    cy
      .get('.start-button').click()
      .get('.logout-button').click()

      .url().should('eq', baseUrl)
  })

})