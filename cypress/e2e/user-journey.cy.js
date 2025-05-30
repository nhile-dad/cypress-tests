describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section",()=>{
    it("the h1 contains the correct text", () => {  
      cy.clickCourseLink(0)
      cy.checkPathName("/testing-your-first-application")
      cy.getByData("next-lesson-button").click()
      
      cy.checkPathName("/testing-your-first-application/app-install-and-overview")
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").click()

      cy.checkPathName("/testing-your-first-application/installing-cypress-and-writing-our-first-test")
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").click()

      cy.checkPathName("/testing-your-first-application/setting-up-data-before-each-test")
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").contains("Complete Course").click()

      cy.checkPathName("/")

    })
  
   
  })
})
