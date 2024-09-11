/// <reference types= “cypress”>

beforeEach (() => {
  cy.viewport(1280, 1024)
  cy.setCookie("CookieConsent","{stamp:%27O8sg2Z8T5kWdRPjoxOG20WioVeH3Eb7Q7Bxauy/Aak8ikxT/6pNcHQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1726058380450%2Cregion:%27sk%27}")
  cy.visit("https://www.drmax.sk/")
  })    

  describe("Verify URL and Cookies", () => {

    it("Verify url", () => {
      cy.log("Url is https://www.drmax.sk/")
      cy.url().should('eq', 'https://www.drmax.sk/')
       })
    
    it("Verify cookies popup", () => {
      cy.log("CookiesPopUp should not be visible")
      cy.contains("Povoliť všetko")
        .should('not.exist')
         })
      })

