module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'src/**/*.snap',
      'package.json',
      '!src/**/*.spec.js'
    ],
    tests: [
      'src/**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      "**/*.js": wallaby.compilers.babel()
    },

    testFramework: 'jest',

    setup: function () {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};