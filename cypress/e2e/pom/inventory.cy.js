/// <reference types="cypress" />


import LoginPage from "../../support/pageObjects/LoginPage";
import credentials from "../../fixtures/credentials.json"
import InventoryPage from "../../support/pageObjects/InventoryPage"

describe('Inventory page tests', ()=>{
    
    beforeEach(()=>{
        LoginPage.open()
        LoginPage.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'))
    })
    it('Check UI elements are visible', ()=>{
        InventoryPage.verifyVisibility()
    })
    it('Check dropdown has 4 elements', ()=>{
        cy.get('[data-test="product-sort-container"] option').should('have.length', 4);
    })
    it('Check that user is redirected after clicking cart icon', ()=>{
        InventoryPage.shoppingCart.click()
        cy.url().should('include', 'cart.html')
    })
    it('Check that item page is opened after clicking on Item', ()=>{
        InventoryPage.getItem(0).click()
    })
})