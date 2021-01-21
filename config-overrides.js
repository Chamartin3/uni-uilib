
const {
  override,
  addWebpackAlias,
  addWebpackModuleRule
} = require("customize-cra");


const path = require('path');

module.exports = override(
  addWebpackModuleRule({test: /\.svg$/, use:'@svgr/webpack'}),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "$": path.resolve(__dirname, "src/components"),
  })
);