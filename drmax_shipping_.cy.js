/// <reference types= “cypress”>

beforeEach (() => {
  cy.viewport(1280, 1024)
  cy.setCookie("CookieConsent","{stamp:%27O8sg2Z8T5kWdRPjoxOG20WioVeH3Eb7Q7Bxauy/Aak8ikxT/6pNcHQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1726058380450%2Cregion:%27sk%27}")
  cy.visit("https://www.drmax.sk/magnerot-9140b")
  })    

  describe("Shipping", () => {
    it("Paid Shipping", () => { 
  
      cy.log("Price basket is empty")
      cy.get(".microcart-price")
        .invoke('text')
        .then(text => parseFloat(text.replace(',', '.').replace('€', '')))
        .should('be.a', 'number')
        .should("eq", 0.00)
  
  
      cy.log("Verify - Product Quantity is 1")
      cy.get("[data-test-id='checkout-product-quantity-input']")
        .should("have.value", 1)

  
  
      cy.log("Add to cart")
      cy.get("[data-test-id='product-add-to-cart-button']")
        .eq(1)
        .click()
        .wait(1000)
      cy.contains("Pokračujte do košíka")
        .should("be.visible")
        .click()

      cy.log("Verify Url Include pokladna/1") 
      cy.url().should("include", "/pokladna/1")

      cy.log("Verify Paid Shipping")
      cy.contains("Doprava zadarmo pri nákupe nad 29,90 €")
        .should("be.visible")
     })

     it("Free Shipping", () => { 
  
      cy.log("Price basket is empty")
      cy.get(".microcart-price")
        .invoke('text')
        .then(text => parseFloat(text.replace(',', '.').replace('€', '')))
        .should('be.a', 'number')
        .should("eq", 0.00)
  
      cy.log("Quantity Count is 2")
      cy.get("[data-test-id='checkout-product-quantity-increase-button']")
        .click()
  
      cy.log("Verify - Product Quantity is 2")
      cy.get("[data-test-id='checkout-product-quantity-input']")
        .should("have.value", 2)
  
  
      cy.log("Add to cart")
      cy.get("[data-test-id='product-add-to-cart-button']")
        .eq(1)
        .click()
          .wait(1000)
      cy.contains("Pokračujte do košíka")
        .should("be.visible")
        .click()

      cy.log("Verify Url Include pokladna/1") 
      cy.url().should("include", "/pokladna/1")

      cy.log("Verify Free Shipping")
      cy.contains("Máte dopravu zadarmo")
        .should("be.visible")
     })
  })
