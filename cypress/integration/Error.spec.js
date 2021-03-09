const baseUrl = 'http://localhost:3000/'
const userEmail = 'test@test.com'
const userPassword = 'testing'
const apiUrl = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term='

describe('Error Page', () => {
  it('Should visit search path on clicking the search icon', () => {
    cy
      .visit(`${baseUrl}login`)
      .get('.email').type(userEmail)
      .get('.password').type(userPassword)
      .get('.form-submit-button').click()
  })

  it('Should display an error page if on occurs', () => {
    cy.intercept('GET', `${apiUrl}lit`, { status: 400 })

    cy
      .get('#search-terms').click()
      .get('input').type('lit')
      .get('.search-button').click()
      .url().should('eq', `${baseUrl}error`)
  })

  it('Should allow user to navigate back to dashboard', () => {
    cy
      .get('.title-notfound').should('have.text', "Uh Oh! Looks like we can't find the page you are looking for or an error has occured!")
      .get('.dashboard-button').click()
      .url().should('eq', baseUrl)
  })

  it('Should allow user to logout at anytime', () => {
    cy
      .get('.start-button').click()
      .get('.logout-button').click()

      .url().should('eq', `${baseUrl}login`)
  })
})