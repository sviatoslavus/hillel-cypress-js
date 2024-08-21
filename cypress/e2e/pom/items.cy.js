/// <reference types="cypress" />


import LoginPage from "../../support/pageObjects/LoginPage";
import credentials from "../../fixtures/credentials.json"
import InventoryPage from "../../support/pageObjects/InventoryPage"
import ItemPage from "../../support/pageObjects/ItemPage";

describe('items test', ()=>{
   
    beforeEach(()=>{
        LoginPage.open()
        LoginPage.login(credentials.userNames.correctUsername, credentials.passwords.correctPassword)
    })
    it('Check item details', ()=>{
        InventoryPage.goToItem()
        ItemPage.verifyVisibily()

    })
    it('Check that there is remove button after adding to cart', ()=>{
        InventoryPage.goToItem()
        ItemPage.addToCartButton.click()
        ItemPage.verifyRemoveButton()
        ItemPage.removeButton.click()
        ItemPage.verifyAddToCart()
    })


})