/// <reference types= “cypress”>


beforeEach (() => {
  cy.viewport(1280, 1024)
  cy.setCookie("cookiehub","eyJhbnN3ZXJlZCI6dHJ1ZSwicmV2aXNpb24iOjEsImRudCI6ZmFsc2UsImFsbG93U2FsZSI6dHJ1ZSwiaW1wbGljdCI6ZmFsc2UsInJlZ2lvbiI6IiIsInRva2VuIjoiY1dKMmdjZXJrZWxKMExPcWxsS0NZOWI0a2dqbnR0Z3hGTm5Wc2ZSTDRaWDM3R0tXRXFpTlNIMkoxbG40aTJ4WiIsInRpbWVzdGFtcCI6IjIwMjQtMDYtMTFUMDc6NTE6MjcuOTkzWiIsImFsbEFsbG93ZWQiOnRydWUsImNhdGVnb3JpZXMiOltdLCJ2ZW5kb3JzIjpbXSwic2VydmljZXMiOltdLCJpbXBsaWNpdCI6ZmFsc2V9")
  cy.visit("https://tatranskyprofil.eu/tatransky-profil-125x96-smrek-ab-trieda")
})        

describe("Calculations", () => {

  

  it("Verify url", () => {
    cy.log("Url include tatransky-profil-125x96-smrek-ab-trieda")
    cy.url().should('include', 'tatransky-profil-125x96-smrek-ab-trieda')
   })

  
  it("Calculations", () => { 

    cy.log("Widget-basket is empty")
    cy.get("[data-test='WidgetBasket']")
      .find(".price-wrapper")
      .eq(2)
      .invoke('text')
      .then(text => parseFloat(text.replace(',', '.')))
      .should('be.a', 'number')
      .should("eq", 0.00)
    

    cy.log("1 button clicks")
    cy.get("[data-test='count-plus']")
    .eq(0)
    .click()
    
   
    cy.log("Verify 1 clicks")
    cy.get("[data-test='count-edit']")
      .eq(0)
      .should("have.value", "1")


      cy.log("Computation");
      cy.get(".variants-tr")
          .find(".price-wrapper")
          .eq(0)
          .invoke("text")
          .then(text => parseFloat(text.replace(',', '.')))
          .should('be.a', 'number')
//          .should('be.eq', 8.80)
          .then((PriceForM2) => {
              cy.get(".tooltip-inner")
                  .find("strong") 
                  .eq(0)
                  .invoke("text")
                  .then(text => parseFloat(text.replace(',', '.')))
                  .should('be.a', 'number')
                  .then((InThePackage) => {
                        cy.get("[data-test='FinalPrice']")
                          .invoke('text')
                          .then(text => parseFloat(text.replace(',', '.')))
                          .should('be.a', 'number')
                          .should("eq", parseFloat((PriceForM2 * InThePackage * 1).toFixed(2)));
             });
          });
        });
    })

  
