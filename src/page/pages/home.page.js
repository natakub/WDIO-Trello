const BasePage = require("./base.page");
const { HomeHeader } = require("../components");

class HomePage extends BasePage {
  constructor() {
    super("https://trello.com/");
    this.homeHeader = new HomeHeader();
  }
}

module.exports = HomePage;
