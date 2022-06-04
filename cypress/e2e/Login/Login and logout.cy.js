const { logInApp, logOut } = require("../../support/register/authorization-config");

describe("", () => {
  it("1.Log in to app", () => {
    logInApp();
  });

  it("2.Logout from app", () => {
    logOut()
  });
});
