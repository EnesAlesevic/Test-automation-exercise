class SearchPage {
    getDressName(position) {
        return cy.get(":nth-child(" + position + ") > .product-container > .right-block > h5 > .product-name")
    }
}
export default SearchPage