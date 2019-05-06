module.exports = {
  env: {
    "browser": true,
    "es6": true,
  },
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "react"
  ],
  rules: {
    "import/extensions": "always"
  },
};
