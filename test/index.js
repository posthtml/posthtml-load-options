// ------------------------------------
// #POSTHTML - LOAD OPTIONS - TEST
// ------------------------------------

'use strict'

const test = require('ava')

const posthtml = require('posthtml')
const optionsrc = require('../index')

const { readFileSync, writeFileSync } = require('fs')

function readSync (path) {
  return readFileSync(path, 'utf8')
}

function writeSync (path, file) {
  return writeFileSync(path, file, 'utf8')
}

test('Process HTML with default options', (t) => {
  optionsrc().then((options) => {
    posthtml([])
      .process(readSync('./fixtures/index.html'), options)
      .then(result => {
        writeSync('./expect/index.html', result.html)
        t.equal(result.html, readSync('./expect/index.html'))
      })
  })
})

test('Process HTML with custom options as string', (t) => {
  optionsrc('posthtmlrc.json').then((options) => {
    posthtml([])
      .process(readSync('./fixtures/index.html'), options)
      .then(result => {
        writeSync('./expect/index.html', result.html)
        t.equal(result.html, readSync('./expect/index.html'))
      })
  })
})

test('Process HTML with custom options as object', (t) => {
  optionsrc('posthtml.config.js').then((options) => {
    posthtml([])
      .process(readSync('./fixtures/index.html'), options)
      .then(result => {
        writeSync('./expect/index.html', result.html)
        t.equal(result.html, readSync('./expect/index.html'))
      })
  })
})
