const env = require('./env-config')

module.exports = {
  "presets": [
    "next/babel","@emotion/babel-preset-css-prop",
  ],
  "plugins": [
    "@emotion/babel-plugin",
    ['transform-define', env]
  ]
}