const h = require('react-hyperscript')
const Nav = require('../Shared/nav')
const Item = require('./item')
const { Link } = require('react-router')
const data = [{
  name: 'St Phillips',
  _id: '1'
},{
  name: 'Seacoast',
  _id: '2'
},{
  name: 'RedCross',
  _id: '3'
}]

module.exports = _ =>
  h('div', [
    h('header', [
      h(Nav)
    ]),
    h('main.center.mw6', [
      h('.cf', [
        h('.fr', [
          h(Link, {
            to: '/organizations/new',
            className: 'f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black'
          }, 'Add New')
        ]),
        h('h2', 'Organizations')
      ]),
      h('ul.list.pl0.ml0.center.mw6.ba.b--light-silver.br2', data.map(item => h(Item, { item })))
    ])
  ])
