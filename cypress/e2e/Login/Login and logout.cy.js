const { logInApp, logOut } = require("../../support/register/authorization-config");

describe("Login as user to the application and logout from it", () => {
  it("1.Log in to app", () => {
    logInApp();
  });

  it("2.Logout from app", () => {
    logOut()
  });
});
