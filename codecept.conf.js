exports.config = {
  tests: './tests/js/main_test.js',
  output: './tests/output/',
  helpers: {
    Puppeteer: {
      chrome: {
        "args": ["--no-sandbox"]
      },
      url: 'http://terance.grey-wing.com:9090',
      show: true,
      restart: false,
      // nosandbox: true
    }
  },
  include: {
    searchAssetPage: './tests/js/pages/searchAssetPage.js',
    loginPage: './tests/js/pages/loginPage.js'

  },
  bootstrap: null,
  mocha: {},
  name: 'GW-remaining-features-test'
}