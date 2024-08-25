/// <reference types="cypress" />
import BasePage from "./BasePage";

class InventoryPage extends BasePage {
    // get item(index){
    //     return cy.get('.inventory_item_name').eq(index)
    // }
    //item getter
    getItem(index = 0) {
        return cy.get('.inventory_item_name').eq(index);
    }
    
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
    
    goToItem(){
        this.item.click()
    }
    open() {
        super.open('inventory.html/');
    }
}

export default new InventoryPage();