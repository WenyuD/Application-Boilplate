import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import authenticationCheck from './components/methods/authenticationCheck';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: false
    };
    this.checkAuth = this.checkAuth.bind(this);
  }
  
  async checkAuth() {
    const token = document.cookie.split('=')[1];
    let email = await authenticationCheck(token);
    if (email !== 'Token not valid') {
      this.setState({ token: true })
    } else {
      this.setState({ token: false })
    }
  }

  async componentDidMount() {
    await this.checkAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              this.state.token ? (
                <Redirect to="/dashboard"/>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(App);
