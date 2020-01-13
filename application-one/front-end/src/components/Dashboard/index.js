import React from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
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
      </div>
    );
  }
}

export default withRouter(Dashboard);