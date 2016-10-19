const h = require('react-hyperscript')
const Nav = require('../Shared/nav')

module.exports = _ =>
  h('div', [
    h('header', [
      h(Nav)
    ])
  ])
