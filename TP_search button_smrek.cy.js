/// <reference types= “cypress”>


beforeEach (() => {
  cy.viewport(1280, 1024)
  cy.setCookie("cookiehub","eyJhbnN3ZXJlZCI6dHJ1ZSwicmV2aXNpb24iOjEsImRudCI6ZmFsc2UsImFsbG93U2FsZSI6dHJ1ZSwiaW1wbGljdCI6ZmFsc2UsInJlZ2lvbiI6IiIsInRva2VuIjoiY1dKMmdjZXJrZWxKMExPcWxsS0NZOWI0a2dqbnR0Z3hGTm5Wc2ZSTDRaWDM3R0tXRXFpTlNIMkoxbG40aTJ4WiIsInRpbWVzdGFtcCI6IjIwMjQtMDYtMTFUMDc6NTE6MjcuOTkzWiIsImFsbEFsbG93ZWQiOnRydWUsImNhdGVnb3JpZXMiOltdLCJ2ZW5kb3JzIjpbXSwic2VydmljZXMiOltdLCJpbXBsaWNpdCI6ZmFsc2V9")
  cy.visit("https://tatranskyprofil.eu/")

})        

describe("Searching process", () => {

  it("Verify url", () => {
    cy.log("Url include /")
    cy.url().should('eq', 'https://tatranskyprofil.eu/')
   })


   it("Searching smrek", () => { 


    cy.log("Find Search button and Type smrek")
    cy.get("#phrase")
      .type("smrek")

    cy.log("Verify Results Contain smrek in UI-menu")
    //cy.get("#ui-id-1")
    cy.get(".product-link-div")
      .should("be.visible")
      .should("contain","smrek")
      
    cy.get("#phrase")
      .click()
      .type('{enter}')

    cy.log("Verify Results Contain smrek in List-view")
    cy.get(".list-view")
      .should("contain","smrek")
    })


    it("Searching Empty Button", () => { 

      cy.log("Clearing the Filter")
      cy.get("#phrase")
        .clear()
        .type('{enter}')

      cy.log("Verify Results Contain No Products")
      cy.contains("Je nám ľúto, neboli nájdené žiadne záznamy.")
      .should("be.visible")
      })



    it("Searching Non-Existent Word in Page", () => { 

      cy.log("Find Search button and Type Calophyllum")
      cy.get("#phrase")
        .type("Calophyllum{enter}")

      cy.log("Verify Results Contain no Products")
      cy.contains("Je nám ľúto, neboli nájdené žiadne záznamy.")
        .should("be.visible")
        })


    it("Sensitivity to Font Size", () => { 

      cy.log("Find Search button and Type SMREK")
      cy.get("#phrase")
        .type("SMREK")
  
      cy.log("Verify Results Contain smrek in UI-menu")
      //cy.get("#ui-id-1")
      cy.get(".product-link-div")
        .should("be.visible")
        .should("contain","smrek")
      cy.get("#phrase")
        .click()
        .type('{enter}')
  
      cy.log("Verify Results Contain smrek in List-view")
      cy.get(".list-view")
        .should("contain","smrek")
         })

    it("Autocomplete Verification", () => { 

      cy.log("Find Search button and Type smr")
      cy.get("#phrase")
        .type("smr")
      
      cy.log("Verify Results Contain smrek in UI-menu")
      //cy.get("#ui-id-1")
      cy.get(".product-link-div")
        .should("be.visible")
        .should("contain","smrek")
      cy.get("#phrase")
        .click()
        .type('{enter}')
      
      cy.log("Verify Results Contain smrek in List-view")
      cy.get(".list-view")
        .should("contain","smrek")
          })

      it("Results after Clearing the Filter", () => { 

        cy.log("Find Search button and Type smrek")
        cy.get("#phrase")
           .type("smrek")
            
        cy.log("Verify Results Contain smrek in UI-menu")
        //cy.get("#ui-id-1")
        cy.get(".product-link-div")
          .should("be.visible")
          .should("contain","smrek")

        cy.get("#phrase")
          .click()
          .type('{enter}')

        cy.log("Verify Results Contain smrek in List-view")
        cy.get(".list-view")
          .should("contain","smrek")

        cy.log("Clearing the Filter")
        cy.get("#phrase")
          .clear()
          .type('{enter}')
            

          cy.log("Verify Results Contain no Products")
          cy.contains("Je nám ľúto, neboli nájdené žiadne záznamy.")
            .should("be.visible")

    })          

  })
