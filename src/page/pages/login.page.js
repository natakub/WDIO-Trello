const BasePage = require("./base.page");
const { LoginForm } = require("../components");

class LoginPage extends BasePage {
  constructor() {
    super("https://trello.com/login");
    this.loginForm = new LoginForm();
  }
}

module.exports = LoginPage;
