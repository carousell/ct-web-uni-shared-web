const config = {
  development: {
    cookieDomain: 'localhost',
    baseURL: 'https://www.chotot.org',
    vehicleURL: 'https://xe.chotot.org',
    propertyURL: 'https://nha.chotot.org',
    accountBaseUrl: 'https://accounts.chotot.org',
    gatewayUrl: 'https://gateway.chotot.org',
    tracking: {
      url: '//tags.tiqcdn.com/utag/chotot/chotot/chotot/dev/utag.js',
      tealium: {
        brand: 'chotot',
        env: 'dev',
      },
      xiti: {
        xtSiteId: '514221',
        xtMobileSiteId: '517449',
        xtLog: 'logw311',
        xtLogSSL: 'logws1311',
        xtCookieDomain: 'localhost',
      },
    },
  },
  staging: {
    cookieDomain: '.chotot.org',
    baseURL: 'https://www.chotot.org',
    vehicleURL: 'https://xe.chotot.org',
    propertyURL: 'https://nha.chotot.org',
    accountBaseUrl: 'https://accounts.chotot.org',
    gatewayUrl: 'https://gateway.chotot.org',
    tracking: {
      url: '//tags.tiqcdn.com/utag/chotot/chotot/chotot/qa/utag.js',
      tealium: {
        brand: 'chotot',
        env: 'qa',
      },
      xiti: {
        xtSiteId: '514221',
        xtMobileSiteId: '517449',
        xtLog: 'logw311',
        xtLogSSL: 'logws1311',
        xtCookieDomain: '.chotot.org',
      },
    },
  },
  uat: {
    cookieDomain: '.chotot.cm',
    baseURL: 'https://www.chotot.cm',
    vehicleURL: 'https://xe.chotot.cm',
    propertyURL: 'https://nha.chotot.cm',
    accountBaseUrl: 'https://accounts.chotot.cm',
    gatewayUrl: 'https://gateway.chotot.cm',
    tracking: {
      url: '//tags.tiqcdn.com/utag/chotot/chotot/chotot/qa/utag.js',
      tealium: {
        brand: 'chotot',
        env: 'qa',
      },
      xiti: {
        xtSiteId: '514221',
        xtMobileSiteId: '517449',
        xtLog: 'logw311',
        xtLogSSL: 'logws1311',
        xtCookieDomain: '.chotot.cm',
      },
    },
  },
  production: {
    cookieDomain: '.chotot.com',
    baseURL: 'https://www.chotot.com',
    vehicleURL: 'https://xe.chotot.com',
    propertyURL: 'https://nha.chotot.com',
    accountBaseUrl: 'https://accounts.chotot.com',
    gatewayUrl: 'https://gateway.chotot.com',
    tracking: {
      url: '//tags.tiqcdn.com/utag/chotot/chotot/chotot/prod/utag.js',
      tealium: {
        brand: 'chotot',
        env: 'prod',
      },
      xiti: {
        xtSiteId: '493002',
        xtMobileSiteId: '500169',
        xtLog: 'logw311',
        xtLogSSL: 'logws1311',
        xtCookieDomain: '.chotot.com',
      },
    },
  },
};

module.exports = { config };
