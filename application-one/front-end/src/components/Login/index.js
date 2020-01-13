import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginAsSignIn: true,
    };
    this.setLoginStatus = this.setLoginStatus.bind(this);
  }

  setLoginStatus() {
    this.setState({loginAsSignIn: !this.state.loginAsSignIn})
  }

  render() {
    return (
      <div className="login">
        {this.state.loginAsSignIn ? 
          <SignIn loginAsSignIn={this.state.loginAsSignIn} setLoginStatus={this.setLoginStatus} /> : 
          <SignUp loginAsSignIn={this.state.loginAsSignIn} setLoginStatus={this.setLoginStatus} />
        }
      </div>
    );
  }
}

export default Login;
