const { browser } = require("@wdio/globals");
const { Header, CreateBoard, MemberMenu } = require("../components");

module.exports = class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.memberMenu = new MemberMenu();
    this.createBoard = new CreateBoard();
  }

  open = async () => {
    await browser.url(this.url);
    await browser.maximizeWindow();
  };
};
