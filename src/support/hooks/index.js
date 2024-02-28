const { pages } = require("../../page");
const resources = require("../resources");

const loginAndOpenPage = async (pageUrl) => {
  await pages("login").open();
  await pages("login").loginForm.performLogin(
    process.env.EMAIL,
    process.env.PASSWORD
  );

  await browser.newWindow(pageUrl);
};

const hooksBeforeEach = {
  login: async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      process.env.EMAIL,
      process.env.PASSWORD
    );
  },

  loginAndOpenProfilePage: async () => {
    await loginAndOpenPage("https://trello.com/u/testuser25489");
    await pages("account").loggedoutHeader.waitForExist(undefined, true);
    await pages("account").memberNavbar.profileTab.waitAndClick();

    await expect(pages("account").editUserForm.rootEl).toBeDisplayed();
  },

  loginAndOpenWorkspacePage: async () => {
    await loginAndOpenPage("https://trello.com/w/testworkspace04649910");
    await pages("workspace").loggedoutHeader.waitForExist(undefined, true);
    await pages("workspace").header.memberIcon.waitForDisplayed();
  },

  loginAndOpenSearchPage: async () => {
    await loginAndOpenPage("https://trello.com/search");
  },

  loginAndOpenBoardPage: async () => {
    await loginAndOpenPage("https://trello.com/b/c26GhLBg/test-list-and-card");
  },

  openSignupPage: async () => {
    await pages("home").open();
    await pages("home").homeHeader.signupPageBtn.waitAndClick();
  },
};

const resetProfileChanges = async (eraseValuesLength) => {
  const editForm = await pages("account").editUserForm;
  await editForm.eraseInputValues(
    editForm.input("username"),
    eraseValuesLength
  );
  await editForm.saveEditBtn.waitAndClick();
};

const resetWorkspaceChanges = async (input, eraseValuesLength) => {
  await pages(
    "workspace"
  ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

  const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
  await editWorkspaceForm.eraseInputValues(input, eraseValuesLength);
  await editWorkspaceForm.saveEditBtn.waitAndClick();
  await pages("workspace").workspaceInfo.workspaceName.waitForDisplayed();
};

const hooksAfter = {
  afterEach: {
    reload: async () => {
      await browser.reloadSession();
    },
  },

  after: {
    resetProfileChangesValid: async () => {
      await resetProfileChanges(resources.testingInputValue.length);
      await browser.reloadSession();
    },

    resetProfileChangesInvalid: async () => {
      await resetProfileChanges(resources.invalidInputValue.length);
      await browser.reloadSession();
    },

    resetWorkspaceName: async () => {
      await resetWorkspaceChanges(
        pages("workspace").editWorkspaceForm.input("name"),
        resources.testingInputValue.length
      );
      await browser.reloadSession();
    },

    resetWorkspaceDescription: async () => {
      await resetWorkspaceChanges(
        pages("workspace").editWorkspaceForm.input("description"),
        resources.testingInputValue.length
      );
      await browser.reloadSession();
    },
  },
};

module.exports = { hooksBeforeEach, hooksAfter };
