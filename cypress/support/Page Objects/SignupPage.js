class SignupPage {

    getGenderButton() {
        return cy.get('#id_gender1')
    }

    getCustomerFirstNameInput() {
        return cy.get('#customer_firstname')
    }

    getCustomerLastNameInput() {
        return cy.get('#customer_lastname')
    }

    getEmailInput() {
        return cy.get('#email')
    }

    getPasswordInput() {
        return cy.get('#passwd')
    }

    getDayInput() {
        return cy.get('#days')
    }

    getMonthInput() {
        return cy.get('#months')
    }

    getYearsInput() {
        return cy.get('#years')
    }

    getFirstNameInput() {
        return cy.get('#email')
    }

    getLastNameInput() {
        return cy.get('#lastname')
    }

    getCompanyInput() {
        return cy.get('#company')
    }

    getAddressInput() {
        return cy.get('#address1')
    }

    getAddressLineInput() {
        return cy.get('#address2')
    }

    getCityInput() {
        return cy.get('#city')
    }

    getStateDropDown() {
        return cy.get('#id_state')
    }

    getZipInput() {
        return cy.get('#postcode')
    }

    getCountryDropDown() {
        return cy.get('#id_country')
    }

    getAdditionalInformationInput() {
        return cy.get('#other')
    }

    getHomePhoneInput() {
        return cy.get('#phone')
    }

    getMobilePhoneInput() {
        return cy.get('#phone_mobile')
    }

    getAliasInput() {
        return cy.get('#alias')
    }

    getRegisterButton() {
        return cy.get('#submitAccount')
    }

}
export default SignupPage