/// <reference types="cypress" />

describe('Basic tests', ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.log('BEFORE EACH LOG');
    })
    it.skip('1. User is able to sign in with valid credentials', () => {
        
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get("#login-button").click()
        cy.contains('.title', 'Products')
    })
    it('2. Error message is displayed while trying to sign in with invalid password', () => {
        cy.get("#login-button");
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce123")
        cy.get("#login-button").click()
        cy.contains('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
    })
    it('3. Error message is displayed while clicking login button with empty credentials', () => {
        
        cy.get("#login-button").click()
        cy.contains('[data-test="error"]', 'Epic sadface: Username is required')
    })
    it('4. Error message is closed after clicking X button', () => {
        cy.get('#user-name').type("standard_user")
        cy.get("#login-button").click()
        cy.get('.error-button').click()
        cy.get('[data-test="error"]').should('not.exist')
    })
    it('5. Error message is displayed while trying to sign in with empty password', () => {
        cy.get("#login-button");
        cy.get('#user-name').type("standard_user")
        cy.get("#login-button").click()
        cy.contains('[data-test="error"]', 'Epic sadface: Password is required')
    })
})