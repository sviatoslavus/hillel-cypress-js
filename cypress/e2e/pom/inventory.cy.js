/// <reference types="cypress" />


import LoginPage from "../../support/pageObjects/LoginPage";
import credentials from "../../fixtures/credentials.json"
import InventoryPage from "../../support/pageObjects/InventoryPage"

describe('Inventory page tests', ()=>{
    beforeEach(()=>{
        LoginPage.login(credentials.userNames.correctUsername, credentials.passwords.correctPassword)
    })
    it('Check UI elements are visible', ()=>{

    })
    it('Check dropdown has 4 elements', ()=>{
        
    })
    it('Check that user is redirected after clicking cart icon', ()=>{
        
    })
    it('Check that item page is opened after clicking on Item', ()=>{
        
    })
})