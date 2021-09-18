context("Exercise 2", () => {

    it("First Get request", () => {
        cy.request('https://reqres.in/api/users').as("users")

        cy.get("@users").should((response) => {
            let data = response.body.data
            for (var i = 0; i < data.length; i++) {
                expect(data[i].id).to.not.be.null
                expect(data[i].email).contains(data[i].first_name.toLowerCase() + "." + data[i].last_name.toLowerCase() + "@reqres.in")
                expect(data[i].avatar.split(".")[2]).to.equal("jpg")
            }
        })
    })

    it("Fourth Get request", () => {
        cy.request('https://reqres.in/api/users?delay=5').as("usersDelay")

        cy.get("@usersDelay").should((response) => {
            let data = response.body.data
            for (var i = 0; i < data.length; i++) {
                expect(data[i].id).to.not.be.null
                expect(data[i].email).contains(data[i].first_name.toLowerCase() + "." + data[i].last_name.toLowerCase() + "@reqres.in")
                expect(data[i].avatar.split(".")[2]).to.equal("jpg")
            }
        })
    })

})