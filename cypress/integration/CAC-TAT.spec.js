///<reference types="Cypress" />


describe("Central de Atendimento ao Cliente TAT", function() {
    beforeEach(function() {
        cy.visit("./src/index.html")
    })

    it("verifica o título de aplicação", function() {
        cy.title().should('be.equal', "Central de Atendimento ao Cliente TAT")
    })

    it("preenche os campos obrigatórios e envia o formulário", function() {
        const longText = 'Test, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
        cy.get('#firstName').type("Isabel")
        cy.get('#lastName').type("Mendes")
        cy.get('#email').type("isabel@exemplo.com")
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')

    })
})