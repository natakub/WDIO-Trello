const HomePage = require("./home.page");
const LoginPage = require("./login.page");
const SignupPage = require("./signup.page");
const BoardsPage = require("./boards.page");
const BoardPage = require("./board.page");
const AccountPage = require("./account.page");
const SearchPage = require("./search.page");
const WorkspacePage = require("./workspace.page");

/**
 * @param name {"signup" | "login"}
 * @returns { SignupPage | LoginPage}
 */
function pages(name) {
  const items = {
    home: new HomePage(),
    signup: new SignupPage(),
    login: new LoginPage(),
    boards: new BoardsPage(),
    board: new BoardPage(),
    account: new AccountPage(),
    search: new SearchPage(),
    workspace: new WorkspacePage(),
  };

  return items[name.toLowerCase()];
}

module.exports = {
  HomePage,
  SignupPage,
  LoginPage,
  BoardsPage,
  BoardPage,
  AccountPage,
  SearchPage,
  WorkspacePage,
  pages,
};
