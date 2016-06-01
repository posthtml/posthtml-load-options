[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Standard Code Style][style]][style-url]

# PostHTML Load Options <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

## Status

| Branch               | Build                     | Coverage                 |
|:--------------------:|:-------------------------:|:------------------------:|
|  Master              | ![travis]                 | ![cover]                 |
|  Release/v1.0.0      | ![travis-rel]             | ![cover-rel]             |

## Install

```bash
npm i -D posthtml-load-options
```

## Options
#### package.json

```json
{
 "dependencies": {
   "posthtml": "^0.8.7"
 },
 "posthtml": {
   "sync": false,
   "skipParse": false
  }
}
```

#### posthtml.config.js

```js
module.exports = {
  sync: false,
  skipParse: false
}
```
#### posthtmlrc.json

```json
{
  "sync": false,
  "skipParse": false
}
```

## Usage
#### Default

```js
'use strict'

const fs = require('fs')

const posthtml = require('posthtml')
const optionsrc = require('posthtml-load-options')()

const html = fs.readFileSync('./index.html', 'utf-8')

posthtmlrc.then((options) => {
  posthtml([])
    .process(html, options)
    .then(result => console.log(result.html))
}))
```

#### Custom

```js
'use strict'

const fs = require('fs')

const posthtml = require('posthtml')
const optionsrc = require('posthtml-load-options')('./path/to/posthtmlrc.json')

const html = fs.readFileSync('./index.html', 'utf-8')

posthtmlrc.then((options) => {
  posthtml([])
    .process(html, options)
    .then(result => console.log(result.html))
}))
```

## LICENSE [![License MIT][license]][license-url]

> License (MIT)

> Copyright (c) 2016 Michael Ciniawsky

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-load-options.svg
[npm-url]: https://npmjs.com/package/posthtml-load-options

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/michael-ciniawsky/posthtml-load-options.svg
[deps-url]: https://david-dm.org/michael-ciniawsky/posthtml-load-options

[devdeps]: https://david-dm.org/michael-ciniawsky/posthtml-load-options/dev-status.svg
[devdeps-url]: https://david-dm.org/michael-ciniawsky/posthtml-load-options#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/michael-ciniawsky/posthtml-load-options.svg
[travis-url]: https://travis-ci.org/michael-ciniawsky/posthtml-load-options

[travis-rel]: http://img.shields.io/travis/michael-ciniawsky/posthtml-load-options.svg?branch=release/1.0.0
[travis-rel-url]:https://travis-ci.org/michael-ciniawsky/posthtml-load-options?branch=release/1.0.0

[travis-dev]: http://img.shields.io/travis/michael-ciniawsky/posthtml-load-options.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/michael-ciniawsky/posthtml-load-options?branch=develop

[cover]: https://coveralls.io/repos/github/michael-ciniawsky/posthtml-load-options/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/michael-ciniawsky/posthtml-load-options?branch=master

[cover-rel]: https://coveralls.io/repos/github/michael-ciniawsky/posthtml-load-options/badge.svg?branch=release/1.0.0
[cover-rel-url]: https://coveralls.io/github/michael-ciniawsky/posthtml-load-options?branch=release/1.0.0

[cover-dev]: https://coveralls.io/repos/github/michael-ciniawsk/posthtml-load-options/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/michael-ciniawsky/posthtml-load-options?branch=develop

[license]: https://img.shields.io/github/license/michael-ciniawsky/posthtml-load-options.svg
[license-url]: https://raw.githubusercontent.com/michael-ciniawsky/posthtml-load-options/master/LICENSE
