/// <reference types="cypress" />

beforeEach(() => {
  cy.viewport(1280, 1024);
  cy.setCookie("cookiehub", "eyJhbnN3ZXJlZCI6dHJ1ZSwicmV2aXNpb24iOjEsImRudCI6ZmFsc2UsImFsbG93U2FsZSI6dHJ1ZSwiaW1wbGljdCI6ZmFsc2UsInJlZ2lvbiI6IiIsInRva2VuIjoiY1dKMmdjZXJrZWxKMExPcWxsS0NZOWI0a2dqbnR0Z3hGTm5Wc2ZSTDRaWDM3R0tXRXFpTlNIMkoxbG40aTJ4WiIsInRpbWVzdGFtcCI6IjIwMjQtMDYtMTFUMDc6NTE6MjcuOTkzWiIsImFsbEFsbG93ZWQiOnRydWUsImNhdGVnb3JpZXMiOltdLCJ2ZW5kb3JzIjpbXSwic2VydmljZXMiOltdLCJpbXBsaWNpdCI6ZmFsc2V9");
  cy.visit("https://tatranskyprofil.eu/registracia");
});

describe("Registration", () => {


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error.') || err.message.includes('gtag is not defined')) {
  return false;
  }
  return true;
  });
 
 function generateRandomUser() {
    const timestamp = Date.now();
    return {
      name_lastname: `test user_${timestamp}`,
      email: `testuser_${timestamp}@example.com`,
      password: "logintest",
      phone: "0000000000"
    };
  }

  it("Succesful Registration process", () => {
    const newUser = generateRandomUser();

    cy.log("Input Name and Last name data");
    cy.get("#tmp-name-lastname").type(newUser.name_lastname);

    cy.log("Input Email data");
    cy.get("#ContactInformations_email").type(newUser.email);

    cy.log("Input Phone data");
    cy.get(".selected-flag").click()
    cy.get("#country-listbox").contains("Slovakia (Slovensko)").click()
    cy.get("#ContactInformations_phone").type(newUser.phone);

    cy.log("Input password data");
    cy.get("#Users_notHashedPassword").type(newUser.password);

    cy.log("Click on Registration button");
    cy.contains("button", "Registrovať").should("be.visible").click();

    cy.log("Verification Registration process");
    cy.contains("Úspešne ste sa zaregistrovali v našom internetovom obchode.").should("be.visible"); 
    cy.contains("Na email sme Vám poslali odkaz pre overenie Vašej emailovej adresy.").should("be.visible"); 
  });


  it("Failed Registration process - Wrong Name", () => {
    const newUser = generateRandomUser();

    cy.log("Input without Name and Last name data");
    cy.get("#tmp-name-lastname").type("testuser");

    cy.log("Input Email data");
    cy.get("#ContactInformations_email").type(newUser.email);

    cy.log("Input Phone data");
    cy.get(".selected-flag").click()
    cy.get("#iti-item-sk").contains("Slovakia (Slovensko)").click()
    cy.get("#ContactInformations_phone").type(newUser.phone);

    cy.log("Input password data");
    cy.get("#Users_notHashedPassword").type(newUser.password);

    cy.log("Click on Registration button");
    cy.contains("button", "Registrovať").should("be.visible").click();

    cy.log("Verification Registration process");
    cy.contains("Priezvisko nesmie byť prázdne.").should("be.visible"); 
  });


  it("Failed Registration process - Wrong Email", () => {
    const newUser = generateRandomUser();

    cy.log("Input Name and Last name data");
    cy.get("#tmp-name-lastname").type(newUser.name_lastname);

    cy.log("Input Email data");
    cy.get("#ContactInformations_email").type("testuser");

    cy.log("Input Phone data");
    cy.get(".selected-flag").click()
    cy.get("#iti-item-sk").contains("Slovakia (Slovensko)").click()
    cy.get("#ContactInformations_phone").type(newUser.phone);

    cy.log("Input password data");
    cy.get("#Users_notHashedPassword").type(newUser.password);

    cy.log("Click on Registration button");
    cy.contains("button", "Registrovať").should("be.visible").click();

    cy.log("Verification Registration process");
    cy.contains("Email nie je platná emailová adresa.").should("be.visible"); 
  });

  it("UnFailed Registration process - Wrong Phone", () => {
    const newUser = generateRandomUser();

    cy.log("Input Name and Last name data");
    cy.get("#tmp-name-lastname").type(newUser.name_lastname);

    cy.log("Input Email data");
    cy.get("#ContactInformations_email").type(newUser.email);

    cy.log("Input Phone data ");
    cy.get(".selected-flag").click()
    cy.get("#ContactInformations_phone").type("00000000000000");

    cy.log("Input password data");
    cy.get("#Users_notHashedPassword").type(newUser.password);

    cy.log("Click on Registration button");
    cy.contains("button", "Registrovať").should("be.visible").click();

    cy.log("Verification Registration process");
    cy.contains("Úspešne ste sa zaregistrovali v našom internetovom obchode.").should("be.visible"); 
    cy.contains("Na email sme Vám poslali odkaz pre overenie Vašej emailovej adresy.").should("be.visible"); 
  });

  it("Failed Registration process - Wrong Password", () => {
    const newUser = generateRandomUser();

    cy.log("Input Name and Last name data");
    cy.get("#tmp-name-lastname").type(newUser.name_lastname);

    cy.log("Input Email data");
    cy.get("#ContactInformations_email").type(newUser.email);

    cy.log("Input Phone data");
    cy.get(".selected-flag").click()
    cy.get("#iti-item-sk").contains("Slovakia (Slovensko)").click()
    cy.get("#ContactInformations_phone").type(newUser.phone);

    cy.log("Input password data");
    cy.get("#Users_notHashedPassword").type("janka");

    cy.log("Click on Registration button");
    cy.contains("button", "Registrovať").should("be.visible").click();

    cy.log("Verification Registration process");
    cy.contains("Heslo musí obsahovať 6 až 32 znakov.").should("be.visible"); 
  });

});
