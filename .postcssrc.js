// https://github.com/michael-ciniawsky/postcss-load-config


module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {
      browsers: [
        "last 10 versions",
        "ie >= 6",
        "ie_mob >= 6",
        "ff >= 10",
        "chrome >= 14",
        "safari >= 3",
        "ios >= 4",
        "android >= 4.0"
      ]
    }
  }
}

