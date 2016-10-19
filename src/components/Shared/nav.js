const h = require('react-hyperscript')
const { Link } = require('react-router')

module.exports = _ =>
  h('nav.pa3.pa4-ns', [
    h(Link, {
      to: '/',
      className: 'link dim black b f6 f5-ns dib mr3'
    }, 'Relief Tracker'),
    h(Link, {
      to: '/',
      className: 'link dim gray f6 f5-ns dib mr3'
    }, 'Home'),
    h(Link, {
      to: '/efforts',
      className: 'link dim gray f6 f5-ns dib mr3'
    }, 'Efforts'),
    h(Link, {
      to: '/persons',
      className: 'link dim gray f6 f5-ns dib mr3'
    }, 'People'),
    h(Link, {
      to: '/organizations',
      className: 'link dim gray f6 f5-ns dib mr3'
    }, 'Organizations'),

    h(Link, {
      to: '/about',
      className: 'link dim gray f6 f5-ns dib mr3'
    }, 'About')
  ])
