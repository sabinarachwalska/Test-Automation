import Header from "../core/menu/header";
import Layout from "../layout/layout";
import LogInForm from "./login-form";

const layout = new Layout();
const loginForm = new LogInForm();
const header = new Header()

export const login = {
    username: "test.automation.user@test.com",
    password: "Testing123!",
  },
  baseUrl = {
    url: "http://automationpractice.com/index.php",
  };

export function logInApp() {
  cy.visit(baseUrl.url + "?controller=authentication&back=my-account");
  layout.breadcrump().contains("Authentication");
  layout.pageHeading().should("have.text", "Authentication");
  loginForm.loginInBlock();
  loginForm.loginSubheading().contains("Already registered?");
  layout.label(1).contains("Email address");
  layout.label(2).contains("Password");
  loginForm.lostPassword().contains("Forgot your password?");
  loginForm.emailInput().type(login.username);
  loginForm.passwordInput().type(login.password);
  loginForm.submitInput().should("have.text", "\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tSign in\n\t\t\t\t\t\t\t").click()
  cy.url().should('contain','?controller=my-account')
  layout.breadcrump().contains('My account')
  header.userAccount('be.visible').contains('Test User')
  header.login('not.exist')
}


export function logOut(){
    header.userAccount('be.visible')
    header.logOut('be.visible').contains('Sign out').click()
    cy.wait(3000)
    header.userAccount('not.exist')
    header.logOut('not.exist')
    header.login('be.visible').contains('Sign in')
}