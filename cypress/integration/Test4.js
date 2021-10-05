/// <reference types="Cypress" />


describe('My first test Suite',()=>{

    it('My fist test case',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el,index,$list)=>{

           const elementName = $el.find('h4.product-name').text()
           if(elementName.includes('Cashews'))
            $el.find('button').trigger('click')
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()
    })

})