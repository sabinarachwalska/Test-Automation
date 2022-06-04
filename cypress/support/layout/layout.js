class Layout{

    label(number){
        return cy.get(':nth-child('+number+') > label').should('be.visible')
    }

    breadcrump(){
        return cy.get('.navigation_page').should('be.visible')
    }

    pageHeading(){
        return cy.get('.page-heading').should('be.visible')
    }
    

}

export default Layout 