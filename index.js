// ------------------------------------
// #POSTHTML - LOAD OPTIONS
// ------------------------------------

'use strict'

const config = require('cosmiconfig')

const loadOptions = require('./lib/loadOptions')

module.exports = function (options) {
  return config('posthtml')
    .catch((error) => console.log(error))
    .then((result) => loadOptions(result.config, options))
}
