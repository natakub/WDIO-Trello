const BasePage = require("./base.page");
const { LoginForm } = require("../components");

class LoginPage extends BasePage {
  constructor() {
    super();
    this.loginForm = new LoginForm();
  }
}

module.exports = LoginPage;
