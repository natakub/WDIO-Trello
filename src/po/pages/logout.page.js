const BasePage = require("./base.page");
const { LogoutForm } = require("../components");

class LogoutPage extends BasePage {
  constructor() {
    super();
    this.logoutForm = new LogoutForm();
  }
}

module.exports = LogoutPage;
