module.exports = {
    '@tags': ['facebook'],

    'Facebook' : function (browser) {
      browser
        .url('http://www.facebook.com')
        .waitForElementVisible('body')
        .pause(1000)
        .assert.title('Facebook - Log In or Sign Up')
        .end();
    }
  };
