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

describe("Calculation", () => {

it("Verify url", () => {
  cy.log("Url include tatranskyprofil")
  cy.url().should('include', 'dracik')
   })

it("Verify cookies popup", () => {
  cy.log("CookiesPopUp should not be visible")
  cy.contains("Prijať všetko")
    .should('not.exist')
     })

it("Calculation", () => {
  cy.log("Find Search Button and Type 71440 Lego Super Mario")
  cy.get(".AutoCompleteForm-group")
    .type("71440 Lego Super Mario")
  cy.contains("button","Zobraziť všetky výsledky")
    .should("be.visible")
    .click()
    
  cy.log("Url include search=71440+Lego+Super+Mario")
  cy.url().should('include', 'search=71440+Lego+Super+Mario')

  cy.log("Choose from Catalog items")
  cy.get(".ProductCard")
    .should("contain","71440 Lego Super Mario")
    .click()


  cy.log("Url include 71440-lego-super-mario")
  cy.url().should('include', '71440-lego-super-mario')

  cy.log("Add to cart")
  cy.contains("Pridať do košíka")
    .should("be.visible")
    .click()

  cy.log("Continue to Basket")
  cy.contains("Pokračovať do košíka")
    .should("be.visible")
    .click()
   

  cy.log('Get UnitPrice')
  cy.get('.BasketProductCard-price') 
      .invoke('text') 
      .then((priceText) => { 
        const unitPrice = parseFloat(priceText.replace('€', '').trim().replace(',', '.'));
        expect(unitPrice).to.be.a('number')
    
  cy.log("Get 2 Items")
  cy.get(".QuantityInput-btn") 
      .eq(1)
      .click()
      .wait(1000)
  
  cy.log("Verify 2 Items")
  cy.get(".QuantityInput-value")
    .should("have.value","2")

  const expectedTotalPrice = (unitPrice * 2).toFixed(2); 

  cy.log("Equality of TotalPrice and ExpectedTotalPrice for 2 Items")
  cy.get('.BasketProductCard-price') 
      .invoke('text')
      .then((totalPriceText) => {
        const totalPrice = totalPriceText.replace('€', '').trim().replace(',', '.')
        expect(totalPrice).to.eq(expectedTotalPrice).toString(); 
      });
    }); 
  })
})

  
