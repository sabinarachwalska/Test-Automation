class Header{

    userAccount(visibility){
        return cy.get('.account').should(visibility)
    }

    logOut(visibility){
        return cy.get('.logout').should(visibility)
    }

    login(visibility){
        return cy.get('.login').should(visibility)
    }

}

export default Header