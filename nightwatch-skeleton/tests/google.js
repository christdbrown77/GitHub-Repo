module.exports = {
    '@tags': ['google'],

    'Demo test Google' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body')
        .pause(1000)
        .assert.title('Google')
        .end();
    }
  };