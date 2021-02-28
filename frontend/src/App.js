import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AuthService from "./services/authentification/auth"

import Landing from './views/Landing/Landing'
import { Register } from './views/Register/Register'
import { Login } from './views/Login/Login'
import Profile from './views/Profile/Profile'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      })
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const currentUser = this.state.currentUser

    return (
      <div>
        <Router>
          <nav className="blue accent-3">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {currentUser ? (
                  <div>
                    <li className="nav-item"><Link to={"/profile"} >{currentUser.username}</Link></li>
                    <li className="nav-item"><a href="/" onClick={this.logOut}>LogOut</a></li>
                  </div>
                ) : (
                    <div>
                      <li className="nav-item"><Link to={"/login"}>LogIn</Link></li>
                      <li className="nav-item"><Link to={"/register"}>Sign Up</Link></li>
                    </div>
                  )}
              </ul>
            </div>
          </nav>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
