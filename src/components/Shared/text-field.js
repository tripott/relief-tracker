const h = require('react-hyperscript')

module.exports = props =>
  h('div', [
    h('label', props.label),
    h('input', { onChange: props.onChange, value: props.value } )
  ])
