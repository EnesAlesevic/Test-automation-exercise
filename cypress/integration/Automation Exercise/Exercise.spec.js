import HomePage from '../../support/Page Objects/HomePage'
import RegisterPage from '../../support/Page Objects/RegisterPage'
import SignupPage from '../../support/Page Objects/SignupPage'
import MyAccount from '../../support/Page Objects/MyAccount'
import SearchPage from '../../support/Page Objects/SearchPage'
import { v4 as uuidv4 } from 'uuid';

uuidv4()

context("Exercise", () => {
    const homePage = new HomePage()
    const registerPage = new RegisterPage()
    const signupPage = new SignupPage()
    const myAccount = new MyAccount()
    const searchPage = new SearchPage()

    it("Navigate to Home Page", () => {
        cy.fixture("data").then((data) => {
            cy.visit(data.url)
            cy.writeFile('cypress/fixtures/myFile.txt', '')
        })
    })

    it("Click on Sign in button and wait for Page load", () => {
        homePage.getLoginButton().click()
    })

    it("Check for existing Email validation on Email address input field", () => {
        cy.fixture("data").then((data) => {
            registerPage.getEmailButton().click().type(data.email)
        })

        registerPage.getCreateAccountButton().click()

        cy.fixture("validation").then((data) => {
            registerPage.getValidationErrorMessage().should("be.visible").contains(data.existingAccount)
        })
    })

    it("Check for invalid Email address format on Email address input field", () => {
        registerPage.getEmailButton().click().clear().type(uuidv4())

        registerPage.getCreateAccountButton().click()

        cy.fixture("validation").then((data) => {
            registerPage.getValidationErrorMessage().should("be.visible").contains(data.invalidEmailAddress)
        })
    })

    it("Click on Create an Account button with valid data", () => {
        registerPage.getEmailButton().click().clear().type(uuidv4() + "@yopmail.com")

        registerPage.getCreateAccountButton().click()
    })

    it("Fill in the registration form", () => {
        signupPage.getGenderButton().click()
        signupPage.getCustomerFirstNameInput().type("firstName")
        signupPage.getCustomerLastNameInput().type("lastName")
        cy.fixture("data").then((data) => {
            signupPage.getPasswordInput().type(data.password)
        })
        signupPage.getDayInput().select("5")
        signupPage.getMonthInput().select("June")
        signupPage.getYearsInput().select("1996")
        signupPage.getCompanyInput().type(uuidv4())
        signupPage.getAddressInput().type(uuidv4())
        signupPage.getAddressLineInput().type(uuidv4())
        signupPage.getCityInput().type(uuidv4())
        signupPage.getStateDropDown().select("Arizona")
        signupPage.getZipInput().type("12345")
        signupPage.getAdditionalInformationInput().type(uuidv4())
        signupPage.getHomePhoneInput().type("123345")
        signupPage.getMobilePhoneInput().type("123345")
        signupPage.getAliasInput().clear().type("Alias")
    })

    it("Click on register button", () => {
        signupPage.getRegisterButton().click()
    })

    it("My account page is displayed", () => {
        cy.url().should("eq", "http://automationpractice.com/index.php?controller=my-account")
    })

    it("User successfully registered and logged in", () => {
        myAccount.getLogoutButton().should("be.visible")
        myAccount.getAccountButton().contains("firstName lastName")
    })

    it("Navigate back to Home Page", () => {
        myAccount.getHomeMenuButton().click()
    })

    it("Assure 7 Popular Category products are displayed", () => {
        homePage.getPopularProduct(7).should("be.visible")
    })

    it("Navigate to Best Sellers tab", () => {
        homePage.getBestSellersTabButton().click()
    })

    it("Assure 7 Best Seller category products are displayed", () => {
        homePage.getBestSellerProduct(7).should("be.visible")
    })

    it("Search for Printed Dresses", () => {

        cy.fixture("data").then((data) => {
            homePage.getSearchField().type(data.searchTerm).type("{enter}")
        })

        for (var i = 1; i <= 5; i++) {
            searchPage.getDressName(i).invoke("text").then((text) => {
                cy.writeFile("dresses.txt", text + " ", { flag: "a+" })
            })
        }
    })

})