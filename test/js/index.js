// ------------------------------------
// #POSTHTML - LOAD OPTIONS - TEST - JS
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

test('posthtml.config.js - {Function} - Parser PUG', (t) => {
  const ctx = { locals: true }

  const parser = require('posthtml-pug')()

  return optionsrc(ctx).then((options) => {
    t.is(options.parser.name, parser.name)
    t.is(options.from, './fixtures/index.html')
    t.is(options.to, './expect/index.html')
  })
})

test('posthtml.config.js - {Function} - Parser SML', (t) => {
  const ctx = { locals: false }

  const parser = require('posthtml-sugarml')()

  return optionsrc(ctx).then((options) => {
    t.is(options.parser.name, parser.name)
    t.is(options.from, './fixtures/index.html')
    t.is(options.to, './expect/index.html')
  })
})

test('posthtml.config.js - {Function} - Process PUG', (t) => {
  const ctx = { locals: { msg: 'Process PUG' } }

  return optionsrc(ctx).then((options) => {
    posthtml(options, 'index.pug', true)
      .then((result) => {
        t.is(expect('index.pug.html'), result.html)
      })
  })
})

test('posthtml.config.js - {Function} - Process SML', (t) => {
  const ctx = { locals: false }

  return optionsrc(ctx).then((options) => {
    posthtml(options, 'index.sml', true)
      .then((result) => {
        t.is(expect('index.sml.html'), result.html)
      })
  })
})

test.skip('posthtml.config.js - {Function} - Process HTML', (t) => {
  return optionsrc().then((options) => {
    posthtml(options, 'index.html', true)
      .then((result) => {
        t.is(expect('index.html'), result.html)
      })
  })
})

test('posthtml.config.js - {Function} - Render JS', (t) => {
  const ctx = { export: '.js' }

  return optionsrc(ctx).then((options) => {
    t.is(options.render, undefined)
    t.is(options.from, './fixtures/index.html')
    t.is(options.to, './expect/index.html')
  })
})

test('posthtml.config.js - {Function} - Render JSX', (t) => {
  const ctx = { export: '.jsx' }

  return optionsrc(ctx).then((options) => {
    t.is(options.render, undefined)
    t.is(options.from, './fixtures/index.html')
    t.is(options.to, './expect/index.html')
  })
})
