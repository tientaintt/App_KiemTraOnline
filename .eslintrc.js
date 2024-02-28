module.exports = {
  root: true,
  extends: '@react-native',
  Option:{
    "prettier/prettier": [
      "error",
      {},
      {
        "fileInfoOptions": {
          "withNodeModules": true
        }
      }
    ]
  }
};
