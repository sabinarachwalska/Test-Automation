import RegisterForm from "./register-form";
const registerForm = new RegisterForm();
let days = "";
let month = "";
let year = "";
const Bluebird = Cypress.Promise;

export function dataAcquisitionRegister() {
  cy.wrap(
    Promise.all([
      Bluebird.resolve(registerForm.daysInput().invoke("val")),
      Bluebird.resolve(registerForm.monthInput().invoke("val")),
      Bluebird.resolve(registerForm.yearInput().invoke("val")),
    ])
  ).spread((daysText, monthText, yearText, stateText) => {
    (days = daysText), (month = monthText), (year = yearText);
  });
}

export function verifyDataRegister() {
  cy.wrap(
    Promise.all([
      Bluebird.resolve(
        registerForm.daysInput().invoke("val").should("eq", days)
      ),
      Bluebird.resolve(
        registerForm.monthInput().invoke("val").should("eq", month)
      ),
      Bluebird.resolve(
        registerForm.yearInput().invoke("val").should("eq", year)
      ),
    ])
  );
}
