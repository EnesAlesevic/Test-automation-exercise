class HomePage {
    getLoginButton() {
        return cy.get('.login')
    }

    getPopularProduct(position) {
        return cy.get("#homefeatured > :nth-child(" + position + ")")
    }

    getBestSellerProduct(position) {
        return cy.get("#blockbestsellers > :nth-child(" + position + ")")
    }

    getBestSellersTabButton() {
        return cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers')
    }

    getSearchField(){
        return cy.get('#search_query_top')
    }
}
export default HomePage