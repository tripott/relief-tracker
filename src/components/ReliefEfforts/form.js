const h = require('react-hyperscript')
const React = require('react')

const Nav = require('../Shared/nav')
const TextField = require('../Shared/text-field')
const TextArea = require('../Shared/text-area')

module.exports = React.createClass({
  getInitialState() {
    return {
      name: '',
      desc: '',
      start: '',
      end: ''
    }
  },
  submit (e) {
    e.preventDefault()
    this.props.route.submit(this.state, (err, result) =>
      this.props.router.push('/efforts')
    )
  },
  onChange (name) {
    return (e) => {
      const state = {}
      state[name] = e.target.value
      this.setState(state)
    }
  },
  render() {
    return (
      h('div', [
        h('header', [
          h(Nav)
        ]),
        h('form.measure.center',{ onSubmit: this.submit }, [
          h('legend', 'Relief Effort Form'),
          h(TextField, {
            label: 'Name',
            value: this.state.name,
            onChange: this.onChange('name')
          }),
          h(TextArea, {
            label: 'Description',
            value: this.state.desc,
            onChange: this.onChange('desc')
          }),
          h(TextField, {
            label: 'Start Date',
            value: this.state.start,
            onChange: this.onChange('start')
          }),
          h(TextField, {
            label: 'End Date',
            value: this.state.end,
            onChange: this.onChange('end')
          }),
          h('div.mt3', [
            h('button', ['Submit'])
          ])

        ])
      ])
    )
  }
})
