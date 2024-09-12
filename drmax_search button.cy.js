/// <reference types= “cypress”>

beforeEach (() => {
  cy.viewport(1280, 1024)
  cy.setCookie("CookieConsent","{stamp:%27O8sg2Z8T5kWdRPjoxOG20WioVeH3Eb7Q7Bxauy/Aak8ikxT/6pNcHQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1726058380450%2Cregion:%27sk%27}")
  cy.visit("https://www.drmax.sk/")
  })    

  describe("Searching button", () => {

    it("Searching magnerot", () => { 

      cy.log("Find Search button and Type magnerot")
      cy.get("[data-test-id='header-search-input']")
        .type("magnerot", { delay: 100 })
  
      cy.log("Verify Results Include magnerot in Suggestion")
      cy.get('.popover-drop', { timeout: 15000 })
        .should('be.visible')
        .contains(/magnerot/i);

        cy.get("[data-test-id='header-search-input']")
        .click()
        .type('{enter}')
  
      cy.log("Verify Results Include magnerot in List-view")
      cy.get('[data-test-id="product_grid"]')
        .contains(/magnerot/i);
      })
  
 
      it("Searching Non-Existent Word in Page", () => { 
  
        cy.log("Find Search button and Type ovolsecujutsixeen")
        cy.get("[data-test-id='header-search-input']")
          .type("ovolsecujutsixeen", { delay: 100 })
    
        cy.log("Verify No Results in Suggestion")
        cy.get(".popover-drop", { timeout: 15000 })
          .should("be.visible")
          .should('include.text', 'Neboli nájdené žiadne výsledky')
  
          cy.get("[data-test-id='header-search-input']")
          .click()
          .type('{enter}')
    
        cy.log("Verify No Results in List-view")
        cy.get(".section__title")
        cy.contains('Vyhľadaný výraz: "ovolsecujutsixeen" (0)')
          .should("be.visible")
          })
  
  
      it("Sensitivity to Font Size", () => { 
  
        cy.log("Find Search button and Type MAGNEROT")
        cy.get("[data-test-id='header-search-input']")
        .type("MAGNEROT", { delay: 100 })
  
        cy.log("Verify Results Include magnerot in Suggestion")
        cy.get('.popover-drop', { timeout: 15000 })
          .should('be.visible')
          .contains(/magnerot/i);

        cy.get("[data-test-id='header-search-input']")
          .click()
          .type('{enter}')
  
        cy.log("Verify Results Include magnerot in List-view")
        cy.get('[data-test-id="product_grid"]')
          .contains(/magnerot/i);
           })
  
      it("Autocomplete Verification", () => { 
  
        cy.log("Find Search button and Type magner")
        cy.get("[data-test-id='header-search-input']")
        .type("magner", { delay: 100 })
        
        cy.log("Verify Results Include magnerot in Suggestion")
        cy.get('.popover-drop', { timeout: 15000 })
          .should('be.visible')
          .contains(/magnerot/i);

        cy.get("[data-test-id='header-search-input']")
          .click()
          .type('{enter}')
  
        cy.log("Verify Results Include magnerot in List-view")
        cy.get('[data-test-id="product_grid"]')
          .contains(/magnerot/i);
            })  
    })
