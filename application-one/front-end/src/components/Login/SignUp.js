import React from 'react';
import { Button, TextField, FormControl, FormHelperText, ThemeProvider } from '@material-ui/core';
import theme from '../styles';
import './styles.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      repeatPassword: '',
      emailNotice: '',
      passwordNotice: '',
      repeatPasswordNotice: '',
      disabledToggle: true
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
        this.setState({
          repeatPasswordNotice: '',
          disabledToggle: false
        }); 
      }
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <form className="forms-container">
          <FormControl>
            <TextField 
              required 
              id="email" 
              label="E-mail" 
              type="email" 
              color="secondary" 
            />
            <FormHelperText error>{this.state.emailNotice}</FormHelperText>
          </FormControl> 
          <FormControl>
            <TextField
              required
              id="password" 
              label="Password" 
              type="password" 
              color="secondary" 
              value={this.state.password} 
              onChange={event => 
                this.checkPassword('password',event.target.value)
              }
            />
            <FormHelperText error>{this.state.passwordNotice}</FormHelperText>  
          </FormControl>
          <FormControl>
            <TextField 
              required
              id="password" 
              label="Confirm Password" 
              type="password" 
              color="secondary" 
              value={this.state.repeatPassword} 
              onChange={event => 
                this.checkPassword('checkPassword',event.target.value)
              }
            />
            <FormHelperText error>{this.state.repeatPasswordNotice}</FormHelperText>
          </FormControl>
          <Button disabled={this.state.disabledToggle} type="submit" variant="contained" color="primary" disableElevation>Sign Up</Button>
          <Button color="secondary" onClick={() => this.setLoginStatus()}>Sign In</Button>
        </form>
      </ThemeProvider>
    );
  }
}

export default SignUp;