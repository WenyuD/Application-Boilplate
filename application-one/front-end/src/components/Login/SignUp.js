import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, TextField, FormControl, FormHelperText, ThemeProvider } from '@material-ui/core';
import SuccessAlert from '../common/SuccessAlert';
import PasswordValidation from '../common/PasswordValidation';
import { passwordValidationToggle } from '../methods/passwordValidationToggle';
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
      repeatPasswordNotice: '',
      passwordNotice: '',
      passwordLengthNotification: '',
      passwordLowercaseNotification: '',
      passwordUppercaseNotification: '',
      passwordNumberNotification: '',
      disabledToggle: true,
      alertToggle: false
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setRepeatPassword = this.setRepeatPassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSignUp = this.fetchSignUp.bind(this);
    this.setAlertToggle = this.setAlertToggle.bind(this);
    this.setState = this.setState.bind(this);
  }

  setEmail(value) {
    this.setState({email: value, emailNotice: ''});
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
      this.setState({passwordNotice: 'Please fill out the password'});
    } else {
      passwordValidationToggle(this.setState, this.state.password);
      if (this.state.repeatPassword && this.state.repeatPassword !== this.state.password) {
        this.setState({repeatPasswordNotice: 'Passwords not match'});
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
    } else if (checkExists === 'Created new user!') {
      this.setAlertToggle();
    }
  }

  setAlertToggle() {
    this.setState({alertToggle: !this.state.alertToggle});
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
            <FormHelperText error>
              <PasswordValidation 
                passwordNotice={this.state.passwordNotice}
                passwordLengthNotification={this.state.passwordLengthNotification}
                passwordLowercaseNotification={this.state.passwordLowercaseNotification}
                passwordUppercaseNotification={this.state.passwordUppercaseNotification}
                passwordNumberNotification={this.state.passwordNumberNotification}
              />
            </FormHelperText>
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
            onClick={() => this.props.setLoginStatus()}
          >
            Sign In
          </Button>
        </form>
        <SuccessAlert alertToggle={this.state.alertToggle} setAlertToggle={this.setAlertToggle} setLoginStatus={this.props.setLoginStatus} />
      </ThemeProvider>
    );
  }
}

export default withRouter(SignUp);