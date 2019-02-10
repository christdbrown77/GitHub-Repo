module.exports = { 
    'Prudential homepage': function(browser) {
      browser
        .url('https://www.prudential.com')
        .waitForElementVisible('body')
        .assert.title('Life Insurance, Retirement, Investments | Prudential Financial')
        .end();
    }
  };