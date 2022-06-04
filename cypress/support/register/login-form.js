class LogInForm {
  loginInBlock() {
    return cy.get("#login_form").should("be.visible");
  }

  loginSubheading() {
    return cy.get("#login_form > .page-subheading").should("be.visible");
  }

  emailInput() {
    return cy.get("#email").should("be.visible");
  }

  passwordInput() {
    return cy.get("#passwd").should("be.visible");
  }

  submitInput() {
    return cy.get("#SubmitLogin > span").should("be.visible");
  }

  lostPassword(){
      return cy.get('.lost_password > a').should("be.visible");
  }
}

export default LogInForm;
