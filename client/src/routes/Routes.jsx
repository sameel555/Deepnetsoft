import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Home from '../components/Home'

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </>
  )
}
export default Routes
