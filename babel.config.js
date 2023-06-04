module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          navigation: './src/navigation',
          features: './src/features',
          helpers: './src/helpers',
          components: './src/components',
          clients: './src/clients',
          services: './src/services',
          screens: './src/screens',
          config: './src/config',
          store: './src/store',
          hooks: './src/hooks',
          types: './src/types',
          lib: './src/lib',
        },
      },
    ],
  ],
};
