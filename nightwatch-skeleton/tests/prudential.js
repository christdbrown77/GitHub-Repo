
module.exports = {
  '@tags': ['sanity'],
  
  'Homepage': function (browser) {
    browser
      .url('https://www.prudential.com')
      .waitForElementVisible('body')
      .verify.title('Life Insurance, Retirement, Investments | Prudential Financial')
      .saveScreenshot('./screenshots/Chris0.png')
  },

  'Advisors': function (browser) {
    browser
      .url('https://www.prudential.com/advisors')
      .waitForElementVisible('body')
      .verify.title('Prudential Advisors | Prudential Financial')
      .saveScreenshot('./screenshots/Chris1.png')
  },

  'Employers': function (browser) {
    browser
      .url('https://www.prudential.com/employers')
      .waitForElementVisible('body')
      .verify.title('Employers | Prudential Financials')
      .saveScreenshot('./screenshots/Chris2.png')
  },

  'Saucelabs': function (browser) {
    browser
    .url('https://saucelabs.com/test/guinea-pig')
    .waitForElementVisible('body')
    .assert.title('I am a page title - Sauce Labs')
    .saveScreenshot('./screenshots/Chris3.png')
    .clearValue('#i_am_a_textbox')
    .setValue('#i_am_a_textbox', 'nightwatch roolz!')
  },

  after: function (browser) {
    browser
      .end();
  }
};