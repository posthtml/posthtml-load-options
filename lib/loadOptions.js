// ------------------------------------
// #POSTHTML - LOAD OPTIONS
// ------------------------------------

'use strict'

const path = require('path')

module.exports = function loadOptions (config, options) {
  if (typeof options === 'string') {
    options = require(path.join(process.cwd(), options))

    for (let option in options) {
      config[option] = options[option]
    }
  }

  if (typeof options === 'object') {
    for (let option in options) {
      config[option] = options[option]
    }
  }

  if (options === undefined) {
    options = config
  }

  if (options === undefined) {
    options = {
      sync: false,
      skipParse: false
    }
  }

  if (options.plugins) {
    delete options.plugins
  }

  return options
}
