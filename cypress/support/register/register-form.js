class RegisterForm {
  registerBlock() {
    return cy.get("#create-account_form").should("be.visible");
  }

  pageSubheading() {
    return cy
      .get("#create-account_form > .page-subheading")
      .should("be.visible");
  }

  formContent() {
    return cy
      .get("#create-account_form > .form_content > p")
      .should("be.visible");
  }

  emailInputLabel() {
    return cy
      .get("#create-account_form > .form_content > .form-group > label")
      .should("be.visible");
  }

  emailInputRegister() {
    return cy.get("#email_create").should("be.visible");
  }

  createAccountButton() {
    return cy.get("#SubmitCreate > span").should("be.visible");
  }

  title() {
    return cy
      .get("#account-creation_form > :nth-child(1) > .clearfix > :nth-child(1)")
      .should("be.visible");
  }

  passwordLabel() {
    return cy.get(".password > label").should("be.visible");
  }

  stateLabel() {
    return cy.get(".id_state > label").should("be.visible");
  }

  postcodeLabel() {
    return cy.get(".postcode > label").should("be.visible");
  }

  addressAliasLabel() {
    return cy.get("#address_alias > label").should("be.visible");
  }

  customerInfos() {
    return cy.get(".is_customer_param > .inline-infos").should("be.visible");
  }

  firstNameInput() {
    return cy.get("#customer_firstname").should("be.visible");
  }

  lastNameInput() {
    return cy.get("#customer_lastname").should("be.visible");
  }

  firstNameInput() {
    return cy.get("#customer_firstname").should("be.visible");
  }

  genderOption(number) {
    return cy
      .get("#id_gender" + number)
      .invoke("css", "opacity", "1")
      .should("be.visible");
  }

  registerEmailInput() {
    return cy.get("#email").should("be.visible");
  }

  registerPasswordInput() {
    return cy.get("#passwd").should("be.visible");
  }

  daysInput() {
    return cy.get("#days").invoke("css", "opacity", "1").should("be.visible");
  }

  monthInput() {
    return cy.get("#months").invoke("css", "opacity", "1").should("be.visible");
  }

  yearInput() {
    return cy.get("#years").invoke("css", "opacity", "1").should("be.visible");
  }

  newsletterInput() {
    return cy.get("#newsletter").invoke("css", "opacity", "1").should("be.visible");
  }

  optinInput() {
    return cy.get("#optin").invoke("css", "opacity", "1").should("be.visible");
  }

  addressFirstName() {
    return cy.get("#firstname").should("be.visible");
  }

  addressLastName() {
    return cy.get("#lastname").should("be.visible");
  }

  companyInput() {
    return cy.get("#company").should("be.visible");
  }

  addressInput(number) {
    return cy.get("#address" + number).should("be.visible");
  }

  cityInput() {
    return cy.get("#city").should("be.visible");
  }

  stateInput() {
    return cy.get("#id_state").invoke("css", "opacity", "1").should("be.visible");
  }

  countryInput() {
    return cy.get("#id_country").invoke("css", "opacity", "1").should("be.visible");
  }

  additionalInfoInput() {
    return cy.get("#other").should("be.visible");
  }

  homePhoneInput() {
    return cy.get("#phone").should("be.visible");
  }

  mobilePhoneInput() {
    return cy.get("#phone_mobile").should("be.visible");
  }

  aliasInput() {
    return cy.get("#alias").should("be.visible");
  }

  legend() {
    return cy.get(".pull-right").should("be.visible");
  }

  passwordInfo() {
    return cy.get(".password > .form_info").should("be.visible");
  }

  accountCreationLabel(number1, number2) {
    return cy
      .get(
        "#account-creation_form > :nth-child(" +
          number1 +
          ") > :nth-child(" +
          number2 +
          ") > label"
      )
      .should("be.visible");
  }

  addressLabel() {
    return cy.get(".is_customer_param > label").should("be.visible");
  }

  postcodeInput() {
    return cy.get("#postcode").should("be.visible");
  }

  additionalLabel() {
    return cy.get(".textarea > label").should("be.visible");
  }

  submitAccountButton() {
    return cy.get("#submitAccount > span").should("be.visible");
  }
}

export default RegisterForm;
