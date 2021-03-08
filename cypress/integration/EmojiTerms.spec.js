const baseUrl = 'http://localhost:3000/login'
const userEmail = 'test@test.com'
const userPassword = 'testing'

describe('DESCRIBE', () => {
  it('Should visit search path on clicking the search icon', () => {
    cy
      .visit(baseUrl)
      .get('.email').type(userEmail)
      .get('.password').type(userPassword)
      .get('.form-submit-button').click()
  })

  it('Should', () => {

  })

  it('Should', () => {

  })

  it('Should', () => {

  })

  it('Should', () => {

  })

  it('Should', () => {

  })

  it('Should allow user to logout at anytime', () => {
    cy
      .get('.start-button').click()
      .get('.logout-button').click()

      .url().should('eq', baseUrl)
  })

})