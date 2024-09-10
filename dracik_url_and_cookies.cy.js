/// <reference types= “cypress”>

beforeEach (() => {
  cy.viewport(1280, 1024)

  const cookieValue = {
    bannershown: 1,
    action: "accept",
    consenttime: 1718365738,
    categories: ["performance", "unclassified", "targeting", "functionality"],
    key: "a268d32f-b055-4169-9253-4cf01121717c"
    };

  cy.setCookie("CookieScriptConsent",JSON.stringify(cookieValue))
  cy.visit("https://www.dracik.sk/")
})        

describe("Verify URL and Cookies", () => {

it("Verify url", () => {
  cy.log("Url include tatranskyprofil")
  cy.url().should('include', 'dracik')
   })

it("Verify cookies popup", () => {
  cy.log("CookiesPopUp should not be visible")
  cy.contains("Prijať všetko")
    .should('not.exist')
     })

  })
