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

    // it("Third Delete request", () => {
    //     let deleteId = Math.floor(Math.random() * 6) + 1
    //     cy.request("https://reqres.in/api/users/" + deleteId).as("deleteUser")

    //     cy.get("@deleteUser").should((response) => {
    //         let user = response.body.data
    //         console.log(user[deleteId - 1])

    //         cy.request('https://reqres.in/api/users').should((res) => {
    //             let usersData = res.body.data
    //             for (var i = 0; i < usersData.length; i++) {
    //                 if (usersData[i].id == deleteId) {
    //                     expect(user.email).to.equal(usersData[i].email)
    //                     expect(user.first_name).to.equal(usersData[i].first_name)
    //                     expect(user.last_name).to.equal(usersData[i].last_name)
    //                 }
    //             }
    //         })

    //     })
    // })

    it("Fourth Get request", () => {
        let delayTime = Math.floor(Math.random() * 10) + 1
        cy.request('https://reqres.in/api/users?delay=' + delayTime).as("usersDelay")

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