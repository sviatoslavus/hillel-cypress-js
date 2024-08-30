import post from "../../fixtures/post.json"

describe("api tests", ()=>{
    it("/posts is 200", ()=>{
        cy.request('GET', "https://jsonplaceholder.typicode.com/posts" ).its('status').should('eq', 200)
    })
    it("post ", ()=>{
        const newPost = post;
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts", newPost)
        .as('postResponse')
        .its('body.id').should('eq', 101)
    })
    it("nested check ", ()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1')
        .its('body[0].name')
        .should('contain', "id labore ex et quam laborum")
    })
})