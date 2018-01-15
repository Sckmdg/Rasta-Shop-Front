const DEVELOPMENT_ENV = 'development';
const DEMO_ENV = 'demo';
const PRODUCTION = 'production';

let defaultUrls = {
  baseUrl: '//test/api'
};

let urls = {};

if (APP_ENV === DEVELOPMENT_ENV) {
  urls = {...defaultUrls};
}
else if (APP_ENV === DEMO_ENV) {
  urls = {
    ...defaultUrls
  };
}
else if (APP_ENV === PRODUCTION) {
  urls = {
    ...defaultUrls,
    baseUrl: '//test-prod/api'
  };
}

export const baseUrl = urls.baseUrl;