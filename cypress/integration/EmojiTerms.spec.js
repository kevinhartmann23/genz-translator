const baseUrl = 'http://localhost:3000/'
const userEmail = 'test@test.com'
const userPassword = 'testing'

describe('Hip Terms', () => {
  it('Should visit search path on clicking the search icon', () => {
    cy
      .visit(`${baseUrl}login`)
      .get('.email').type(userEmail)
      .get('.password').type(userPassword)
      .get('.form-submit-button').click()
  })

  it('Should redirect user to hip terms after clicking the icon', () => {
    cy 
      .get('#top-terms').click()
      .url().should('eq', `${baseUrl}hipterms`)
  })

  it('Should display top terms', () => {
    cy 
      .get('td:first').should('have.text', 'Cancel Culture:')
      .get('td').eq(1).should('have.text', 'a form of online shaming to express disappointment in the views or actions of a public figure, company, or organization.')
  })

  it('Should redired user back to dashboard when clicking exit', () => {
    cy 
      .get('.exit-button').click()
      .url().should('eq', baseUrl)
  })

})

describe('Emoji Guide', () => {
  it('Should direct user to emoji guide when clicking the emoji guid icon', () => {
    cy 
      .get('.sidebar')
      .get('#emoji-guide').click()
      .url().should('eq', `${baseUrl}emojiguide`)
  })

  it('Should display an emoji with its meaning', () => {
    cy
      .get('td:first').should('have.text', '⏳')
      .get('td').eq(1).should('have.text', 'attractive')
  })
  
  it('Should allow user to logout at anytime', () => {
    cy
      .get('.start-button').click()
      .get('.logout-button').click()

      .url().should('eq', `${baseUrl}login`)
  })
})