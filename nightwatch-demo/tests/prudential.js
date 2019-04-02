
module.exports = {
  '@tags': ['prudential'],
  
  'Homepage': function (browser) {
    browser
      .url('https://www.prudential.com')
      .waitForElementVisible('body')
      .verify.title('Life Insurance, Retirement, Investments | Prudential Financial')
  },

  'Advisors': function (browser) {
    browser
      .url('https://www.prudential.com/advisors')
      .waitForElementVisible('body')
      .verify.title('Prudential Advisors | Prudential Financial')
  },

  'Employers': function (browser) {
    browser
      .url('https://www.prudential.com/employers')
      .waitForElementVisible('body')
      .verify.title('Employers | Prudential Financial')
  },

  
  after: function (browser) {
    browser
      .end();
  }
};