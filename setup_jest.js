/* eslint strict:off, global-require:off */

'use strict';

require('babel-polyfill');
const noop = require('node-noop').noop;

process.env.MOCK_REQUESTS = 'false';
process.env.NODE_ENV = 'test';
process.env.HOST = 'https://localhost';
process.env.PORT = '443';

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = false;
global.__TESTING__ = true;
global.__PRODUCTION_RELEASE__ = true;

global.__GIT_REVISION__ = JSON.stringify('');
global.__DEVTOOLS__ = false;
global.__SENTRY_DISABLE__ = true;

global.Raven = {
  captureException: noop,
  captureMessage: noop,
};