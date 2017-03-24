module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js*',
      'src/**/*.snap',
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

    debug: true
  };
};
