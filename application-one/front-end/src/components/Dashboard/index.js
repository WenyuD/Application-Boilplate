import React from 'react';
import { withRouter } from 'react-router-dom';
import authenticationCheck from '../methods/authenticationCheck';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: ''
    };
    this.logOut = this.logOut.bind(this);
  }

  async componentDidMount() {
    const token = document.cookie.split('=')[1];
    let email = await authenticationCheck(token);
    this.setState({userEmail: email.userEmail});
  }

  logOut() {
    document.cookie = 'token=';
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="Dashboard">
        <button 
          type="submit"
          onClick={() => this.logOut()}
        >
          Log Out
        </button>
        <div>Welcome, {this.state.userEmail}</div>
      </div>
    );
  }
}

export default withRouter(Dashboard);