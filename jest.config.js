module.exports = {
  verbose: true,
  bail: true,
  testURL: 'http://localhost/',
  rootDir: __dirname,
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['<rootDir>/node_modules'],
  restoreMocks: true,
  testMatch: ['**/__tests__/**/?(spec|test).js', '**/?(*.)(spec|test).js'],
  moduleFileExtensions: ['js'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
}
