/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

const submitButtonText = "Submit Coin";
const totalCoinsId = "#total-coins";

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    //Eject coins if any
    cy.get("button").contains("Eject All Coins").click();
  });
  describe("Method:AddMoney", () => {
    it("should add coin in 1 Dollar", () => {
      // Find an input field with the name "money" and type "1"
      cy.get("input[name=money]").clear().type("1");

      // Find an input field with the name "currency" , clear it and type "$"
      cy.get("input[name=currency]").clear().type("$");

      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 1
      cy.get(totalCoinsId).should("have.text", "Current Balance: $1 00c");
    });

    it("should add coin in 2 Dollars", () => {
      // Find an input field with the name "money" and type "1"
      cy.get("input[name=money]").clear().type("2");

      // Find an input field with the name "currency" , clear it and type "$"
      cy.get("input[name=currency]").clear().type("$");

      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 2
      cy.get(totalCoinsId).should("have.text", "Current Balance: $2 00c");
    });

    it("should not add coin other than 1 or 2 Dollars", () => {
      // Find an input field with the name "money" and type "1"
      cy.get("input[name=money]").clear().type("3");

      // Find an input field with the name "currency" , clear it and type "$"
      cy.get("input[name=currency]").clear().type("$");

      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Catch alert message
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Please enter a valid coin value");
      });

      //Current total should be 1
      cy.get(totalCoinsId).should("have.text", "Current Balance: $0 00c");
    });

    it("should add coin in 10 Cents", () => {
      // Find an input field with the name "money" and type "1"
      cy.get("input[name=money]").clear().type("10");

      // Find an input field with the name "currency" , clear it and type "$"
      cy.get("input[name=currency]").clear().type("c");

      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 10c
      cy.get(totalCoinsId).should("have.text", "Current Balance: $0 10c");
    });

    it("should add coin in 20 Cents", () => {
      // Find an input field with the name "money" and type "1"
      cy.get("input[name=money]").clear().type("20");

      // Find an input field with the name "currency" , clear it and type "$"
      cy.get("input[name=currency]").clear().type("c");

      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 20c
      cy.get(totalCoinsId).should("have.text", "Current Balance: $0 20c");
    });

    it("should add coin in 50 Cents", () => {
      // Find an input field with the name "money" and type "1"
      cy.get("input[name=money]").clear().type("50");

      // Find an input field with the name "currency" , clear it and type "$"
      cy.get("input[name=currency]").clear().type("c");

      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 50c
      cy.get(totalCoinsId).should("have.text", "Current Balance: $0 50c");
    });

    it("should not add coin other than 10,20 or 50 cents", () => {
      // Find an input field with the name "money" and type "1"
      cy.get("input[name=money]").clear().type("5");

      // Find an input field with the name "currency" , clear it and type "$"
      cy.get("input[name=currency]").clear().type("c");

      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Catch alert message
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Please enter a valid coin value");
      });

      //Current total should be 0
      cy.get(totalCoinsId).should("have.text", "Current Balance: $0 00c");
    });
  });

  describe("Method:BuyItem", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
      //Eject coins if any
      cy.get("button").contains("Eject All Coins").click();
      //Current total should be 0
      cy.get(totalCoinsId).should("contain", "Current Balance: $0 00c");

      //All buttons named "Buy" should be disabled
      cy.get("button").contains("Buy").should("be.disabled");
    });

    it("should enable buy button if exact amount is entered", () => {
      // Find an input field with the name "money" and type "2"
      cy.get("input[name=money]").clear().type("2");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 2
      cy.get(totalCoinsId).should("have.text", "Current Balance: $2 00c");

      //All buttons named "Buy" should be disabled except for the one with the text "Buy $2 00c"
      cy.get("button").contains("Buy $2 00c").should("be.enabled");
    });

    it("should disable all buy buttons if exact amount is not entered", () => {
      // Find an input field with the name "money" and type "2"
      cy.get("input[name=money]").clear().type("1");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 2
      cy.get(totalCoinsId).should("have.text", "Current Balance: $1 00c");

      //All buttons named "Buy" should be disabled
      cy.get("button").contains("Buy").should("be.disabled");
    });

    it("should show an alert after buying an item", () => {
      // Find an input field with the name "money" and type "2"
      cy.get("input[name=money]").clear().type("2");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 2
      cy.get(totalCoinsId).should("have.text", "Current Balance: $2 00c");

      //All buttons named "Buy" should be disabled except for the one with the text "Buy $2 00c"
      cy.get("button").contains("Buy $2 00c").should("be.enabled");

      //Find an button with the text "Buy $2 00c" and click it
      cy.get("button").contains("Buy $2 00c").click();

      //Catch alert message
      cy.on("window:alert", (str) => {
        expect(str).to.equal("You bought a Organic Raw Chocolate for $2 00c");
      });
    });

    it("should clear current balance after buying an item", () => {
      // Find an input field with the name "money" and type "2"
      cy.get("input[name=money]").clear().type("2");

      //Find an button with the text "Submit Coin" and click it
      cy.get("button").contains(submitButtonText).click();

      //Current total should be 2
      cy.get(totalCoinsId).should("have.text", "Current Balance: $2 00c");

      //All buttons named "Buy" should be disabled except for the one with the text "Buy $2 00c"
      cy.get("button").contains("Buy $2 00c").should("be.enabled");

      //Find an button with the text "Buy $2 00c" and click it
      cy.get("button").contains("Buy $2 00c").click();

      //Catch alert message
      cy.on("window:confirm", (str) => {
        expect(str).to.equal("You bought a Organic Raw Chocolate for $2 00c");
      });

      //Current total should be 0
      cy.get(totalCoinsId).should("have.text", "Current Balance: $0 00c");
    });
  });
});
