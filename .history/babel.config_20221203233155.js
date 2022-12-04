module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@styles': './src/styles/styles.tsx',
          '@images': './src/assets/images/',
          '@Utils': './src/utils/Utils.tsx',
          '@Navigator': './src/navigators/Navigator.tsx',
          '@components': './src/components/',
          '@redux': './src/redux/',
          '@screens': './src/screens/',
          '@api': './src/api/',
          '@screenName': './src/routers/registerScreens.tsx',
          '@MyAsyncStorage': './src/storage/MyAsyncStorage.tsx',
          '@keyName': './src/storage/keyName.tsx',
          '@strings': './src/styles/strings.tsx',
          '@ApiClient': './src/api/ApiServices.tsx',
        },
      },
    ],
  ],
};
