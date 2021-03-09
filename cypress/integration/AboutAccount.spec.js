const baseUrl = 'http://localhost:3000/'
const userEmail = 'test@test.com'
const userPassword = 'testing'

describe('About Page', () => {
  it('Should visit search path on clicking the search icon', () => {
    cy
      .visit(`${baseUrl}login`)
      .get('.email').type(userEmail)
      .get('.password').type(userPassword)
      .get('.form-submit-button').click()
  })

  it('Should direct user to an about page when clickin about in the dropdown menu', () => {
    cy
      .get('.start-button').click()
      .get('.about-button').click()
      .url().should('eq', `${baseUrl}about`)
  })

  it('Should display information about the app and the creator', () => {
    cy
     .get('p').eq(1).contains('An on the go translator')
      .get('p').eq(2).contains('Kevin Hartmann')
      .get('p').eq(3).contains('kevinhartmann23@gmail.com')
  })

  it('Should have links to social media account and redirect to my resume', () => {
    cy 
      .get('#linkedin')
      .get('#github')
      .get('#twitter')
      .get('.resume-button').click()
      .url().should('eq', `${baseUrl}resume`)
  })

})

describe('Account Information Page', () => {

  it('Should visit account information', () => {
    cy
      .get('.close-button').click()
      .get('.start-button').click()
      .get('.account-button').click()
      .url().should('eq', `${baseUrl}account`)
  })

  it('Should display user account information', () => {
    cy 
      .get('#name').should('have.value', 'Testing')
      .get('#email').should('have.value', 'test@test.com')
      .get('#last-signin')
      .get('#account-created')
  })

  it('Should allow user to edit settings and security', () => {
    cy
      .get('#1').click()
      .get('#name').type('Testing')
      .get('.update-button').click()
      .get('.success-message').should('have.text', 'Your account has been updated!')
      .get('.theme-option').click()
      .get('li').eq(1).click()
      .get('.apply-button').click()
      .get('.success-message').should('have.text', 'Theme has been updated to vaporTeal')
  })

  it('Should allow user to logout at anytime', () => {
    cy
      .get('.close-button').click()
      .get('.start-button').click()
      .get('.logout-button').click()

      .url().should('eq', `${baseUrl}login`)
  })
})