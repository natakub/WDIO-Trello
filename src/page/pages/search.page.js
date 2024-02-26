const BasePage = require("./base.page");
const { SearchComponent } = require("../components");

class SearchPage extends BasePage {
  constructor() {
    super("https://trello.com/search");
    this.searchComponent = new SearchComponent();
  }
}

module.exports = SearchPage;
