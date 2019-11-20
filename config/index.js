const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const isNode =
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null;

const env = (typeof window !== 'undefined' && window.process) ? window.process.env : process.env;
let baseDomain = 'com';
if (isNode) {
    baseDomain = env.BASE_DOMAIN;
}
if (isBrowser) {
    baseDomain = window.BASE_DOMAIN;
}

const config = {
    cookieDomain: `.chotot.${baseDomain}`,
    baseURL: `https://www.chotot.${baseDomain}`,
    vehicleURL: `https://xe.chotot.${baseDomain}`,
    propertyURL: `https://nha.chotot.${baseDomain}`,
    accountBaseUrl: `https://accounts.chotot.${baseDomain}`,
    gatewayUrl: `https://gateway.chotot.${baseDomain}`,
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
            xtCookieDomain: `.chotot.${baseDomain}`,
        },
    },
};
module.exports = config;
