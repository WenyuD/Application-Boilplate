import React from 'react';
import './styles.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.setLoginStatus = this.setLoginStatus.bind(this);
  }

  setLoginStatus() {
    this.props.setLoginStatus();
  }

  render() {
    return (
      <form className="forms-container">
        <input type="email" name="email" placeholder="Username or E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <span onClick={() => this.setLoginStatus()}>Sign Up</span>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default SignIn;