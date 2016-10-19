const h = require('react-hyperscript')
const { Link } = require('react-router')
const bkg = require('../background.jpeg')

module.exports = props =>
  h('div', [
    h('nav.pa3.pa4-ns', [
      h(Link, {
        to: '/',
        className: 'link dim gray b f1 f-headline-ns tc db mb3 mb4-ns'},
        'Relief Tracker'),
      h('div', { className: 'tc pb3' }, [
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
    ]),
    h('img', {src: bkg})
  ])
