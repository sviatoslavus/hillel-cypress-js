/// <reference types="cypress" />
import BasePage from "./BasePage";

class ItemPage extends BasePage{
    open() {
        super.open('inventory.html/');
    }
    get name(){
        return cy.get('.inventory_details_name')
    }

    get picture(){
        return cy.get('.inventory_details_img')
    }
    get description(){
        return cy.get('.inventory_details_desc')
    }
    get addToCartButton(){
        return cy.get('#add-to-cart')
    }
    get removeButton(){
        return cy.get('#remove')
    }
    get priceTag(){
        return cy.get('.inventory_details_price')
    }
    verifyVisibily(){
        this.picture.should('be.visible')
        this.name.should('be.visible')
        this.addToCartButton.should('be.visible')
        this.priceTag.should('be.visible')
    }
    verifyRemoveButton(){
        this.removeButton.should('be.visible')
    }
    verifyAddToCart(){
        this.addToCartButton.should('be.visible')
    }
}
export default new ItemPage()