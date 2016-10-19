const h = require('react-hyperscript')
const React = require('react')

const { Router, Route, hashHistory, withRouter } = require('react-router')
const Landing = require('./components/Landing')
const ReliefEfforts = require('./components/ReliefEfforts')
const ReliefEffortsForm = require('./components/ReliefEfforts/form')
const ReliefEffortsDetail = require('./components/ReliefEfforts/show')

const Persons = require('./components/Persons')
const PersonsForm = require('./components/Persons/form')
const PersonsDetail = require('./components/Persons/show')


module.exports = React.createClass({
  submit(effort, cb) {
    console.log(effort)
    cb(null, { ok: true})
  },
  render() {
    return (
      h(Router, { history: hashHistory }, [
        h(Route, { path: '/', component: Landing }),
        // Relief Efforts
        h(Route, { path: '/efforts', component: ReliefEfforts }),
        h(Route, {
          path: '/efforts/new',
          component: withRouter(ReliefEffortsForm),
          submit: this.submit
        })
        //,
        // h(Route, { path: '/efforts/:id/edit', component: ReliefEffortsForm }),
        // h(Route, { path: '/efforts/:id', component: ReliefEffortsDetail }),
        // Persons
        // h(Route, { path: '/persons', component: Persons }),
        // h(Route, { path: '/persons/new', component: PersonsForm }),
        // h(Route, { path: '/persons/:id/edit', component: PersonsForm }),
        // h(Route, { path: '/persons/:id', component: PersonsDetail })

      ])

    )
  }
})
