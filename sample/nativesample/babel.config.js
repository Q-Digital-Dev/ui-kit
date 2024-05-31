module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "nativewind/babel",
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ['module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "~popupMenu": "./src/pages/modals/popupMenu/popupMenu.page.options.ts",
          "~bottomSheet": "./src/pages/modals/bottomSheet/bottomSheet.page.options.ts",
          "~dialog": "./src/pages/modals/alert/alert.page.options.ts",
          "~routes": "./src/app/router/routes.json",
          "^~(.+)": "./src/\\1",
        }
      }
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
};
