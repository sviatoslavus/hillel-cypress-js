/// <reference types="cypress" />
import BasePage from "./BasePage";

class InventoryPage extends BasePage {

    open() {
        super.open('inventory.html/');
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
    get item(){
        return cy.get('.inventory_item_name').first()
    }
    goToItem(){
        this.item.click()
    }
}

export default new InventoryPage();