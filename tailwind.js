const base = require("./base.js");

module.exports = {
  ...base,
  plugins: [...base.plugins, require("prettier-plugin-tailwindcss")]
};
