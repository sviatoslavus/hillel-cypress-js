/// <reference types="cypress" />


class InventoryPage extends BasePage {


    get burgerMenu (){
        return cy.get('#react-burger-menu-btn')
    }
    get shoppingCart (){
        return cy.get('.shopping_cart_container')
    }
    get dropSortingDropdown(){
        return cy.get('.product_sort_container')
    }
    verifyVisibility(){
        this.burgerMenu.should('be.visible')
        this.shoppingCart.should('be.visible')
        this.dropSortingDropdown.should('be.visible')
    }
}