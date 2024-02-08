const { browser } = require("@wdio/globals");
const { Header, CreateBoard, MemberMenu } = require("../components");

module.exports = class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.memberMenu = new MemberMenu();
    this.createBoard = new CreateBoard();
  }

  get loggedoutHeader() {
    return $("[data-testid='logged-out-header-wide']");
  }

  async open() {
    await browser.url(this.url);
    await browser.maximizeWindow();
  }
};
