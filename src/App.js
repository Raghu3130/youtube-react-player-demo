import React, {Component} from 'react'
//Import css for the application
import login from './components/socialLogin/login'
import Player from './components/player'
import './index.css'
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const RestrictedRoute = ({
      component: Component,
      isLoggedIn,
      ...rest
    }) => (

      <Route
        {...rest}
        render={props => isLoggedIn
        ? <Component {...props}/>
        : <Redirect
          to={{
          pathname: '/login',
          state: {
            from: props.location
          }
        }}/>}/>
    );
    // console.log("sdfsdf", this);
    return (
      <Router>
        <Route
          render={({location}) => (
          <Switch location={location}>
            <Route path="/" exact title="Login" component={login}/>
            <Route path="/login" exact title="Login" component={login}/>
            <RestrictedRoute
              path="/video"
              component={Player}
              isLoggedIn={this.props.isLoggedIn}/>
          </Switch>
        )}/></Router>
    );
  }
}

export default connect(state => ({
  isLoggedIn: state
    .Login
    .get('idToken') !== null
    ? true
    : false
}), null)(App);
