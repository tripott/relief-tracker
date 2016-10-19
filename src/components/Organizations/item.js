const h = require('react-hyperscript')
const { Link } = require('react-router')

module.exports = props =>
  h('li.ph3.pv3.bb.b--light-silver', { key: props.item._id }, [
    h(Link, { to: '', className: 'link hover-bg-light-blue'}, props.item.name )
  ])
