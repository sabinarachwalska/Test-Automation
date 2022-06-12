class Layout {
  label(number) {
    return cy.get(":nth-child(" + number + ") > label").should("be.visible");
  }

  breadcrump() {
    return cy.get(".navigation_page").should("be.visible");
  }

  pageHeading() {
    return cy.get(".page-heading").should("be.visible");
  }

  pageHeadingOption(number) {
    return cy
      .get(":nth-child(" + number + ") > .page-subheading")
      .should("be.visible");
  }

  labelOption(number1, number2) {
    return cy
      .get(":nth-child(" + number1 + ") > :nth-child(" + number2 + ") > label")
      .should("be.visible");
  }

  infos() {
    return cy.get("p.inline-infos").should("be.visible");
  }

  infosOption(number) {
    return cy
      .get(":nth-child(" + number + ") > .inline-infos")
      .should("be.visible");
  }

  topOption(number) {
    return cy.get(":nth-child(" + number + ") > .top").should("be.visible");
  }

  infoTitle() {
    return cy.get(".info-title").should("be.visible");
  }

  alert() {
    return cy.get(".alert").should("be.visible");
  }

  footerLinkOption(number) {
    return cy
      .get(".footer_links > :nth-child(" + number + ") > .btn > span")
      .should("be.visible");
  }

  centerColumnOption(number) {
    return cy
      .get("#center_column > :nth-child(" + number + ")")
      .should("be.visible");
  }

  darkOption(number) {
    return cy.get(":nth-child(" + number + ") > .dark").should("be.visible");
  }

  indent() {
    return cy.get(".p-indent").should("be.visible");
  }

  pageSubheading() {
    return cy.get(".page-subheading").should("be.visible");
  }
  required() {
    return cy.get("p.required").should("be.visible");
  }

  checkbox() {
    return cy.get('div[class="checker"] > span').should("be.visible");
  }

  lastItem(number1, number2) {
    return cy
      .get(
        ".last_item > :nth-child(" + number1 + ") > :nth-child(" + number2 + ")"
      )
      .should("be.visible");
  }
}

export default Layout;
