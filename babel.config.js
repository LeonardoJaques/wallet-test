module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@root': './',
          '@src': './src',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@fonts': './src/assets/fonts',
          '@strings': './src/res/strings',
          '@screens': './src/screens',
          '@contexts': './src/components/contexts',
          '@templates': './src/components/templates',
          '@organisms': './src/components/organisms',
          '@molecules': './src/components/molecules',
          '@atoms': './src/components/atoms',
          '@utils': './src/utils',
          '@services': './src/services',
        },
      },
    ],
  ],
};
