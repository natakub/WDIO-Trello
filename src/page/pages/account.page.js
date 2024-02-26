const BasePage = require("./base.page");
const { UserInfo, MemberNavbar, EditUserForm } = require("../components");

class AccountPage extends BasePage {
  constructor() {
    super();
    this.userInfo = new UserInfo();
    this.memberNavbar = new MemberNavbar();
    this.editUserForm = new EditUserForm();
  }
}

module.exports = AccountPage;
