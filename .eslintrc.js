module.exports = {
  extends: [
    "airbnb",
    "plugin:jest/recommended",
    // Prettier must go last so that it can turn off other rules
    "prettier",
    "prettier/react"
  ],
  plugins: ["jest", "react-hooks"],
  env: {
    "jest/globals": true
  }
};
