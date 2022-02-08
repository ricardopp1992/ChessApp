module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@navigators': './src/navigators',
          '@assets': './src/assets',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
