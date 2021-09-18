class RegisterPage {
    getEmailButton() {
        return cy.get('#email_create')
    }

    getCreateAccountButton() {
        return cy.get('#SubmitCreate')
    }

    getValidationErrorMessage(){
        return cy.get('#create_account_error')
    }
}
export default RegisterPage