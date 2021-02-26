import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from "./history"

import AuthService from "./services/auth"

import { Landing } from './components/Landing'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Profile } from './components/Profile'

export default function App() {

  const [user, setUser] = useState(null)

  useEffect(function () {
    const user = AuthService.getCurrentUser()
  }, [])

  if (user) {
    setUser(user)
  }

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {user ? (
              <div>
                <li><Link to={"/profile"}>{user.username}</Link></li>
                <li><Link to={"/"} onClick={AuthService.logout()}>LogOut</Link></li>
              </div>
            ) : (
                <div>
                  <li><Link to={"/login"}>LogIn</Link></li>
                  <li><Link to={"/register"}>Sign Up</Link></li>
                </div>
              )}
          </ul>
        </div>
      </nav>
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    </div>
  )
}
