module.exports = {
  displayName: 'habit-app',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  moduleNameMapper: {
    '.svg': '@nrwl/react-native/plugins/jest/svg-mock'
  },
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@react-native-community|@react-native|@react-navigation)']
}
