/* eslint strict:off, global-require:off */

'use strict';

module.exports = {
  roots: [
    '<rootDir>/src/',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file_mock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  setupFiles: [
    '<rootDir>/setup_jest.js',
  ],
  testEnvironment: 'jsdom',
  verbose: false,
};