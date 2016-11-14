module.exports = (ctx) => {
  return {
    parser: ctx.locals
     ? { name: 'posthtml-pug', options: { locals: ctx.locals } }
     : 'posthtml-sugarml',
    from: './fixtures/index.html',
    to: './expect/index.html'
  }
}
