// ------------------------------------
// #POSTHTML - LOAD OPTIONS - TEST - RC
// ------------------------------------

'use strict'

const test = require('ava')

const read = require('fs').readFileSync
const join = require('path').join

const fixture = (file) => {
  return read(join(__dirname, 'fixtures', file), 'utf8')
}

const expect = (file) => {
  return read(join(__dirname, 'expect', file), 'utf8')
}

function posthtml (options, fix, log) {
  return require('posthtml')([])
    .process(fixture(fix), options)
    .then((result) => {
      if (log) {
        console.log(result.html)
        console.log(result.tree.options)
      }

      return result
    })
}

const optionsrc = require('../..')

test('package.json - {Object} - Parser', (t) => {
  const ctx = {}

  const parser = require('posthtml-sugarml')()

  return optionsrc(ctx).then((options) => {
    t.is(options.parser.name, parser.name)
    t.is(options.from, './fixtures/index.html')
    t.is(options.to, './expect/index.html')
  })
})

test('package.json - {Object} - Process SML', (t) => {
  const ctx = {}

  return optionsrc(ctx).then((options) => {
    posthtml(options, 'index.sml', true)
      .then((result) => {
        t.is(expect('index.sml.html'), result.html)
      })
  })
})

test.skip('packagee.json - {Object} - Process HTML', (t) => {
  return optionsrc().then((options) => {
    posthtml(options, 'index.html', true)
      .then((result) => {
        t.is(expect('index.html'), result.html)
      })
  })
})

test('package.json - {Object} - Render JS', (t) => {
  const ctx = {}

  return optionsrc(ctx).then((options) => {
    t.is(options.render, undefined)
    t.is(options.from, './fixtures/index.html')
    t.is(options.to, './expect/index.html')
  })
})

test('package.json - {Object} - Render JSX', (t) => {
  const ctx = {}

  return optionsrc(ctx).then((options) => {
    t.is(options.render, undefined)
    t.is(options.from, './fixtures/index.html')
    t.is(options.to, './expect/index.html')
  })
})
