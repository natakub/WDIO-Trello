class Button {
  constructor(selector) {
    this.selector = selector;
  }

  get element() {
    return $(this.selector);
  }

  waitAndClick = async () => {
    await this.element.waitForExist({
      timeout: 10000,
      timeoutMsg: "Button did not exist",
    });
    await this.element.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Button did not display",
    });
    await this.element.waitForEnabled({
      timeout: 10000,
      timeoutMsg: "Button is not enabled",
    });
    await this.element.click();
  };

  waitAndSetValue = async () => {
    await this.element.waitForExist({
      timeout: 10000,
      timeoutMsg: "Button did not exist",
    });
    await this.element.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Button did not display",
    });
    await this.element.waitForEnabled({
      timeout: 10000,
      timeoutMsg: "Button is not enabled",
    });
    await this.element.setValue();
  };
}

module.exports = Button;
