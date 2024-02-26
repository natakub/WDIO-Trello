const BasePage = require("./base.page");
const { SignupForm } = require("../components");

class SignupPage extends BasePage {
  constructor() {
    super();
    this.signupForm = new SignupForm();
  }
}

module.exports = SignupPage;
