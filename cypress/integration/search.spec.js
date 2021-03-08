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

  })

  it('Should allow user to direct back to dashboard', () => {

  })

  it('Should allow user to submit their search', () => {

  })

  it('Should display results if results are found', () => {

  })

  it('Should display an error message if results are not found', () => {

  })

  it('Should allow user to logout at anytime', () => {
    cy
      .get('.start-button').click()
      .get('.logout-button').click()

      .url().should('eq', baseUrl)
  })

})