class UserProfile {
  accountInfo() {
    return cy.get(".info-account").should("be.visible");
  }

  accountSections(number1, number2) {
    return cy
      .get(
        ":nth-child(" +
          number1 +
          ") > .myaccount-link-list > :nth-child(" +
          number2 +
          ") > a > span"
      )
      .should("be.visible");
  }

  iconList() {
    return cy.get(".icon-list-ol").should("be.visible");
  }

  iconBan() {
    return cy.get(".icon-ban-circle").should("be.visible");
  }

  iconHome() {
    return cy.get(".icon-building").should("be.visible");
  }

  iconHeart() {
    return cy.get(".icon-heart").should("be.visible");
  }

  iconPerson() {
    return cy.get(".icon-user").should("be.visible");
  }

  addressPhoneMobile() {
    return cy.get("address_phone_mobile").should("be.visible");
  }

  addressCompanyName() {
    return cy.get(".address_company").should("be.visible");
  }

  addressOption(number) {
    return cy.get(".address_address" + number).should("be.visible");
  }
  phone() {
    return cy.get(".address_phone").should("be.visible");
  }

  phoneMobile() {
    return cy.get(".address_phone_mobile").should("be.visible");
  }
}

export default UserProfile;
