import React from 'react';
import Main from './Main';
import Admin from './components/Admin'
import EmployerProfile from './components/EmployerProfile'
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router'

module.exports = (
  <Route path="/" component={ Main }>
    <Route path="employers/:employerid" component={ EmployerProfile } />
    <IndexRoute component={ Admin } />
  </Route>
)