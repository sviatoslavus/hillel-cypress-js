/// <reference types="cypress" />


import LoginPage from "../../support/pageObjects/LoginPage";
import credentials from "../../fixtures/credentials.json"


describe('Pom tests', ()=>{

    beforeEach(() => {
        LoginPage.open();
    })
    it('1. User is able to sign in with valid credentials', ()=>{
        LoginPage.login(credentials.userNames.correctUsername, credentials.passwords.correctPassword)
        cy.contains('.title', 'Products')
    })
    it('2. Error message is displayed while trying to sign in with invalid password', () => {
        LoginPage.login(credentials.userNames.correctUsername, credentials.passwords.incorrectPassword)
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service')
        // cy.contains('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
    })
    it('3. Error message is displayed while clicking login button with empty credentials', () => {
        LoginPage.loginButton.click()
        LoginPage.verifyErrorMessage('Epic sadface: Username is required')
        
    })
    it('4. Error message is closed after clicking X button', () => {
        LoginPage.login(credentials.userNames.correctUsername, credentials.passwords.incorrectPassword)
        LoginPage.errorButton.click()
        
        LoginPage.errorMessage.should('not.exist')
    })
    it('5. Error message is displayed while trying to sign in with empty password', () => {
        LoginPage.login(credentials.userNames.correctUsername, credentials.passwords.incorrectPassword)
        LoginPage.passwordField.clear()
        LoginPage.loginButton.click()
        LoginPage.verifyErrorMessage('Epic sadface: Password is required')
    })
    
})