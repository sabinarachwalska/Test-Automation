//Ideally test should delete this user but I don't have access to admin account or sql server to delete it from base.

import Header from "../../support/core/menu/header";
import {
  generateCompanyName,
  generatePassword,
  generatePostcode,
  generateRandomName,
  generateRandomNumber,
  generateRandomSurname,
  generateStreet,
  generateTown,
  phone,
  randomEmail,
} from "../../support/core/table/user-data";
import Layout from "../../support/layout/layout";
import { baseUrl } from "../../support/register/authorization-config";
import LogInForm from "../../support/register/login-form";
import RegisterForm from "../../support/register/register-form";
import UserProfile from "../../support/register/user-profile";
import {
  dataAcquisitionRegister,
  verifyDataRegister,
} from "../../support/register/data-acquisition";

describe("User register test", () => {
  const header = new Header();
  const layout = new Layout();
  const registerForm = new RegisterForm();
  const loginForm = new LogInForm();
  const userProfile = new UserProfile();

  beforeEach(() => {
    cy.saveLocalStorage();
  });
  afterEach(() => {
    cy.restoreLocalStorage();
  });

  it("1.Goes to sign in page", () => {
    cy.visit(baseUrl.url);
    header.login("be.visible").contains("Sign in").click();
    cy.url().should("contain", "controller=authentication&back=my-account");
    layout.breadcrump().contains("Authentication");
    layout.pageHeading().should("have.text", "Authentication");
    registerForm.registerBlock();
    registerForm.pageSubheading().contains("Create an account");
    registerForm
      .formContent()
      .contains("Please enter your email address to create an account.");
    registerForm.emailInputLabel().contains("Email address");
    registerForm.emailInputRegister().type(randomEmail);
    registerForm.createAccountButton().contains("Create an account").click();
  });

  it("2. Fill register form", () => {
    cy.wait(5000);
    cy.url().should(
      "contain",
      "controller=authentication&back=my-account#account-creation"
    );
    layout.breadcrump().contains("Authentication");
    layout.pageHeading().should("have.text", "Create an account");
    layout.pageHeadingOption(1).contains("Your personal information");
    registerForm.title().contains("Title");
    layout.topOption(3).contains("Mr.");
    layout.topOption(4).contains("Mrs.");
    registerForm.genderOption(1);
    registerForm.genderOption(1).click();
    layout.labelOption(1, 3).should("contain", "First name *");
    registerForm.firstNameInput().type(generateRandomName);
    layout.labelOption(1, 4).contains("Last name *");
    registerForm.lastNameInput().type(generateRandomSurname);
    layout.labelOption(1, 5).contains("Email *");
    loginForm.emailInput().invoke("val").should("eq", randomEmail);
    registerForm.passwordLabel().contains("Password *");
    registerForm.registerPasswordInput().type(generatePassword);
    registerForm.passwordInfo().contains("(Five characters minimum)");
    layout.labelOption(1, 7).contains("Date of Birth");
    layout.labelOption(1, 8).contains("Sign up for our newsletter!");
    layout
      .labelOption(1, 9)
      .contains("Receive special offers from our partners!");
    registerForm.daysInput().select(generateRandomNumber);
    registerForm.monthInput().select(generateRandomNumber);
    registerForm.yearInput().select(generateRandomNumber);
    registerForm.newsletterInput().click();
    registerForm.optinInput().click();
    registerForm
      .addressFirstName()
      .invoke("val")
      .should("eq", generateRandomName);
    registerForm
      .addressLastName()
      .invoke("val")
      .should("eq", generateRandomSurname);
    registerForm.addressInput(1).type(generateStreet);
    registerForm.addressInput(2).type(generateRandomNumber);
    registerForm.companyInput().type(generateCompanyName);
    layout.pageHeadingOption(2).contains("Your address");
    layout.labelOption(2, 2).contains("First name *");
    registerForm.accountCreationLabel(2, 3).contains("Last name *");
    registerForm.accountCreationLabel(2, 4).contains("Company");
    layout.labelOption(2, 5).contains("Address *");
    layout
      .infosOption(5)
      .contains("Street address, P.O. Box, Company name, etc.")
      .should("have.css", "color", "rgb(241, 51, 64)");
    registerForm.addressLabel().contains("Address (Line 2)");
    registerForm
      .customerInfos()
      .contains("Apartment, suite, unit, building, floor, etc...");
    layout.labelOption(2, 7).contains("City *");
    registerForm.cityInput().type(generateTown);
    registerForm.stateLabel().contains("State *");
    registerForm.stateInput().select(generateRandomNumber);
    registerForm.postcodeLabel().contains("Zip/Postal Code *");
    registerForm.postcodeInput().type(generatePostcode);
    layout.labelOption(2, 10).contains("Country *");
    registerForm.countryInput().should("contain", "United States");
    registerForm.additionalLabel().contains("Additional information");
    registerForm.additionalInfoInput().type("Test E2E");
    layout
      .infos()
      .contains("You must register at least one phone number.")
      .should("have.css", "color", "rgb(255, 0, 0)");
    layout.labelOption(2, 13).contains("Home phone");
    layout.labelOption(2, 14).contains("Mobile phone *");
    registerForm.homePhoneInput().type(phone);
    registerForm.mobilePhoneInput().type(phone);
    registerForm
      .addressAliasLabel()
      .contains("Assign an address alias for future reference. *");
    registerForm.aliasInput().invoke("val").should("eq", "My address");
    registerForm.aliasInput().type("{selectAll}{del}").type("Test E2E");
    registerForm.legend().contains("*Required field");
  });

  it("3. Data acquisition and save a user", () => {
    dataAcquisitionRegister();
    registerForm.submitAccountButton().contains("Register").click();
  });

  it("4.Veryfies provided information", () => {
    cy.wait(5000);
    cy.url().should("contain", "controller=my-account");
    layout.breadcrump().contains("My account");
    layout.pageHeading().should("have.text", "My account");
    userProfile
      .accountInfo()
      .contains(
        "Welcome to your account. Here you can manage all of your personal information and orders."
      );
    userProfile.accountSections(1, 1).contains("Order history and details");
    userProfile.accountSections(1, 2).contains("My credit slips");
    userProfile.accountSections(1, 3).contains("My addresses");
    userProfile.accountSections(1, 4).contains("My personal information");
    userProfile.accountSections(2, 1).contains("My wishlists");
    userProfile.iconBan();
    userProfile.iconHeart();
    userProfile.iconHome();
    userProfile.iconList();
    userProfile.iconPerson();
    header
      .userAccount("be.visible")
      .contains(generateRandomName + " " + generateRandomSurname);
  });

  it("5. Veryfies information in Order history section", () => {
    userProfile
      .accountSections(1, 1)
      .contains("Order history and details")
      .click({ force: true });
    cy.wait(5000);
    loginForm.emailInput().type(randomEmail);
    loginForm.passwordInput().type(generatePassword);
    loginForm.submitInput().click();
    cy.wait(3000);
    userProfile
      .accountSections(1, 1)
      .contains("Order history and details")
      .click({ force: true });
    cy.url().should("contain", "controller=history");
    layout.breadcrump().contains("Order history");
    layout.pageHeading().should("have.text", "Order history");
    layout
      .infoTitle()
      .contains(
        "Here are the orders you've placed since your account was created."
      );
    layout
      .alert()
      .contains("You have not placed any orders.")
      .should("have.css", "background-color", "rgb(254, 145, 38)");
    layout.footerLinkOption(2).contains("Home");
    layout.footerLinkOption(1).contains("Back to your account.").click();
    cy.wait(5000);
    cy.url().should("contain", "controller=my-account");
    layout.breadcrump().contains("My account");
  });

  it("6. Veryfies information in My credit slips section", () => {
    userProfile.accountSections(1, 2).contains("My credit slips").click();
    cy.wait(5000);
    loginForm.emailInput().type(randomEmail);
    loginForm.passwordInput().type(generatePassword);
    loginForm.submitInput().click();
    cy.wait(3000);
    userProfile.accountSections(1, 2).contains("My credit slips").click();
    cy.url().should("contain", "controller=order-slip");
    layout.breadcrump().contains("Credit slips");
    layout.pageHeading().contains("Credit slips");
    layout
      .infoTitle()
      .contains("Credit slips you have received after canceled orders.");
    layout
      .alert()
      .contains("You have not received any credit slips.")
      .should("have.css", "background-color", "rgb(254, 145, 38)");
    layout.footerLinkOption(2).contains("Home");
    layout.footerLinkOption(1).contains("Back to your account").click();
    cy.wait(5000);
    cy.url().should("contain", "controller=my-account");
    layout.breadcrump().contains("My account");
  });

  it("7. Veryfies information in My addresses section", () => {
    userProfile.accountSections(1, 3).contains("My addresses").click();
    cy.wait(5000);
    loginForm.emailInput().type(randomEmail);
    loginForm.passwordInput().type(generatePassword);
    loginForm.submitInput().click();
    cy.wait(3000);
    userProfile.accountSections(1, 3).contains("My addresses").click();
    cy.url().should("contain", "controller=addresses");
    layout.breadcrump().contains("My addresses");
    layout.pageHeading().should("have.text", "My addresses");
    layout
      .centerColumnOption(2)
      .contains(
        "Please configure your default billing and delivery addresses when placing an order. You may also add additional addresses, which can be useful for sending gifts or receiving an order at your office."
      );
    layout
      .darkOption(1)
      .contains("Your addresses are listed below.")
      .should("have.css", "color", "rgb(51, 51, 51)");
    layout
      .indent()
      .contains(
        "Be sure to update your personal information if it has changed."
      );
    layout.pageSubheading().contains("Test E2E");
    layout.lastItem(2, 1).contains(generateRandomName);
    layout.lastItem(2, 2).contains(generateRandomSurname);
    userProfile.addressCompanyName().contains(generateCompanyName);
    userProfile.addressOption(1).contains(generateStreet);
    userProfile.addressOption(2).contains(generateRandomNumber);
    layout.lastItem(5, 1).contains(generateTown);
    layout.lastItem(5, 3).contains(generatePostcode);
    layout.lastItem(6, 1).contains("United States");
    userProfile.phone().contains(phone);
    userProfile.phoneMobile().contains(phone);
    layout.footerLinkOption(2).contains("Home");
    layout.footerLinkOption(1).contains("Back to your account").click();
    cy.wait(5000);
    cy.url().should("contain", "controller=my-account");
    layout.breadcrump().contains("My account");
  });

  it("8. Veryfies information in My personal information section", () => {
    userProfile
      .accountSections(1, 4)
      .contains("My personal information")
      .click();
    cy.wait(5000);
    loginForm.emailInput().type(randomEmail);
    loginForm.passwordInput().type(generatePassword);
    loginForm.submitInput().click();
    cy.wait(3000);
    userProfile
      .accountSections(1, 4)
      .contains("My personal information")
      .click();
    cy.url().should("contain", "controller=identity");
    layout.breadcrump().contains("Your personal information");
    layout.pageSubheading().contains("Your personal information");
    layout
      .infoTitle()
      .contains(
        "Please be sure to update your personal information if it has changed."
      );
    layout
      .required()
      .contains("*Required field")
      .should("have.css", "color", "rgb(241, 51, 64)");
    registerForm
      .addressFirstName()
      .invoke("val")
      .should("eq", generateRandomName);
    registerForm
      .addressLastName()
      .invoke("val")
      .should("eq", generateRandomSurname);
    registerForm.registerEmailInput().invoke("val").should("eq", randomEmail);
    layout.checkbox().first().should("have.class", "checked");
    layout.checkbox().last().should("have.class", "checked");
    verifyDataRegister();
  });
});
