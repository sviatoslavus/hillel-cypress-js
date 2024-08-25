import post from "../../fixtures/post.json"

describe("api tests with plugins", ()=>{
    const newPost = post
    it("/put check the title is changed", ()=>{
        cy.api('PUT','https://jsonplaceholder.typicode.com/posts/1',newPost).should((response) =>{
            expect(response.body.title).to.eq('foo')
        })
    })
    it("Delete post", ()=>{
        cy.api('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').should((response)=>{
            expect(response.status).to.eq(200)
        })
    })
    it("Patch ", ()=>{
        cy.api('PUT','https://jsonplaceholder.typicode.com/posts/1',{
            title: "changed"
        }).should((response) =>{
            expect(response.body.title).to.eq('changed')
        })
    })
})