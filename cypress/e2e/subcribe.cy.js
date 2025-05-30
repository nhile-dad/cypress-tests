describe("Subcribe form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
    it("allow users to subcribe to the email list", () => {  
      cy.getByData("email-input").type("nhi@gmail.com")
      cy.clickByElement("submit-button")
      cy.getByData("success-message").should("exist").contains("nhi@gmail.com")
    })

    it("does not allow users to subcribe to the email list", () => {  
        cy.getByData("email-input").type("nhigmail.com")
        cy.clickByElement("submit-button")
        cy.getByData("success-message").should("not.exist")
      })

      it("does not allow registered users to subcribe to the email list", () => {  
        cy.getByData("email-input").type("john@example.com")
        cy.clickByElement("submit-button")
        cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address.")
      })
  
  })
  