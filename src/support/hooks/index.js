const { pages } = require("../../page");

const loginAndOpenPage = async (pageUrl) => {
  await pages("login").open();
  await pages("login").loginForm.performLogin(
    process.env.EMAIL,
    process.env.PASSWORD
  );

  await browser.newWindow(pageUrl);
};

const hooksBefore = {
  beforeEachEditProfile: async () => {
    await loginAndOpenPage("https://trello.com/u/testuser25489");
    await pages("account").loggedoutHeader.waitForExist(undefined, true);
    await pages("account").memberNavbar.profileTab.waitAndClick();

    await expect(pages("account").editUserForm.rootEl).toBeDisplayed();
  },

  beforeEachEditWorkspace: async () => {
    await loginAndOpenPage("https://trello.com/w/testworkspace04649910");
    await pages("workspace").loggedoutHeader.waitForExist(undefined, true);
    await pages("workspace").header.memberIcon.waitForDisplayed();

    await expect(pages("workspace").editWorkspaceForm.rootEl).toBeDisplayed();
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

const hooksAfter = {
  afterEachReload: async () => {
    await browser.reloadSession();
  },

  afterEachResetChangesValid: async () => {
    await resetProfileChanges(6);
    await browser.reloadSession();
  },

  afterEachResetChangesInvalid: async () => {
    await resetProfileChanges(2);
    await browser.reloadSession();
  },
};

module.exports = { hooksBefore, hooksAfter };
