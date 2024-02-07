const BasePage = require("./base.page");
const { UserWorkspaces } = require("../components");

class BoardsPage extends BasePage {
  constructor() {
    super();
    this.userWorkspaces = new UserWorkspaces();
  }
}

module.exports = BoardsPage;
