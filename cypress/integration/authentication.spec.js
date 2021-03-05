const baseUrl = 'http://localhost:3000/login'
const userEmail = 'test@test.com'
const userPassword = 'testing'

describe('User Login', ()=> {
  
  it('should display error if anything is incorrect in form', () => {
    cy
      .visit(baseUrl)

      .get('.email').type('test')
      .get('.password').type(userPassword)

    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('The email address is badly formatted.')
      done()
      return false
    })

      .get('.form-submit-button').click()
      .get('input').eq(0).clear()
      .get('input').eq(1).clear()

  })
  
  it('should type in username and password', () => {
    cy
      .get('.email').type(userEmail)
      .get('input').eq(0).should('have.value', userEmail)

      .get('.password').type(userPassword)
      .get('input').eq(1).should('have.value', userPassword)

      .get('.form-submit-button').click()
  })

  it('should direct user to dashboard', () => {
    cy
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should sign user out from dashboard, and redirect back to login', () => {
    cy
      .get('.start-button').click()
      .get('.logout-button').click()

      .url().should('eq', baseUrl)
  })

})

describe('User Signup', () => {
  it('should direct user to signup when clicking the signup link', () => {
    cy
      .get('.signup-link').click()

      .url().should('eq', 'http://localhost:3000/signup')
  })

  it('should display error if anything is incorrect in form', () => {
    cy
      .get('.email').type(userEmail)
      .get('input').eq(1).type(userPassword)
      .get('input').eq(2).type(userPassword)

    cy.on('uncaught:exception', (err, runnable) => {
      expect('.error').to.include('The email address is already in use by another account')
      done()
      return false
    })

      .get('.form-submit-button').click()

  })

  it('should return user to login when clicking that link', () => {
    cy
      .get('.login-link').click()

      .url().should('eq', 'http://localhost:3000/login')
  })
})

