import React from 'react';
import './styles.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      repeatPassword: '',
      passwordNotice: '',
      repeatPasswordNotice: ''
    };
    this.setLoginStatus = this.setLoginStatus.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setRepeatPassword = this.setRepeatPassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  setLoginStatus() {
    this.props.setLoginStatus();
  }

  setPassword(value) {
    this.setState({password: value});
  }

  setRepeatPassword(value) {
    this.setState({repeatPassword: value});
  }

  async checkPassword(action, value) {
    if (action === 'password') {
      await this.setPassword(value);
    } else if (action === 'checkPassword') {
      await this.setRepeatPassword(value);
    }

    if (!this.state.password) {
      this.setState({passwordNotice: 'Please fill out the password!'});
    } else {
      this.setState({passwordNotice: ''})
      if (this.state.repeatPassword && this.state.repeatPassword !== this.state.password) {
        this.setState({repeatPasswordNotice: 'Passwords Not Match!'});
      } else if (this.state.repeatPassword && this.state.repeatPassword === this.state.password) {
        this.setState({repeatPasswordNotice: 'Passwords Match!'}); 
      }
    }
  }

  render() {
    return (
      <form className="forms-container">
        <input 
          type="email" 
          name="email" 
          placeholder="Username or E-mail" 
        />
        <span>{this.state.passwordNotice}</span>
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={event => 
            this.checkPassword('password',event.target.value)
          } 
        />
        <span>{this.state.repeatPasswordNotice}</span>
        <input 
          type="password" 
          name="password" 
          placeholder="Confirm Password" 
          value={this.state.repeatPassword} 
          onChange={event => 
            this.checkPassword('checkPassword',event.target.value)
          } 
        />
        <span onClick={() => this.setLoginStatus()}>Sign In</span>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignUp;