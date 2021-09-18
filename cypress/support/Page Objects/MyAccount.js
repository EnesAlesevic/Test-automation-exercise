class MyAccount {
    getLogoutButton() {
        return cy.get('.logout')
    }

    getAccountButton(){
        return cy.get('.account')
    }

    getHomeMenuButton(){
        return cy.get('.logo')
    }
}
export default MyAccount