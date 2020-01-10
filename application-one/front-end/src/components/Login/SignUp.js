import React from 'react';
import { Button, TextField, FormControl, FormHelperText, ThemeProvider } from '@material-ui/core';
import theme from '../styles';
import './styles.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      emailNotice: '',
      passwordNotice: '',
      repeatPasswordNotice: '',
      disabledToggle: true
    };
    this.setEmail = this.setEmail.bind(this);
    this.setLoginStatus = this.setLoginStatus.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setRepeatPassword = this.setRepeatPassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSignUp = this.fetchSignUp.bind(this);
  }

  setEmail(value) {
    this.setState({email: value, emailNotice: ''});
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

  handleSubmit() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.fetchSignUp(data);
  }

  async fetchSignUp(data) {
    const response = await fetch('http://localhost:3001/signup', { 
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let checkExists = await response.json();
    if (checkExists === 'This email already exists!') {
      this.setState({emailNotice: 'This email already exists!'});
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <form className="forms-container" onSubmit={e => { e.preventDefault()}}>
          <FormControl>
            <TextField 
              required 
              id="email" 
              label="E-mail" 
              type="email" 
              color="secondary"
              value={this.state.email}
              onChange={event => 
                this.setEmail(event.target.value)
              } 
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
              id="confirmPassword" 
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
          <Button 
            disabled={this.state.disabledToggle} 
            type="submit" 
            variant="contained" 
            color="primary" 
            disableElevation
            onClick={() => this.handleSubmit()}
          >
            Sign Up
          </Button>
          <Button 
            color="secondary" 
            onClick={() => this.setLoginStatus()}
          >
            Sign In
          </Button>
        </form>
      </ThemeProvider>
    );
  }
}

export default SignUp;