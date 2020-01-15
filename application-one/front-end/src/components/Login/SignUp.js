import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, TextField, FormControl, FormHelperText, ThemeProvider } from '@material-ui/core';
import SuccessAlert from '../common/SuccessAlert';
import PasswordValidation from '../common/PasswordValidation';
import { passwordValidationToggle } from '../methods/passwordValidationToggle';
import { emailValidationToggle } from '../methods/emailValidationToggle';
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
      emailValid: false,
      passwordValid: false,
      repeatPasswordValid: false,
      disabledToggle: true,
      alertToggle: false
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setRepeatPassword = this.setRepeatPassword.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSignUp = this.fetchSignUp.bind(this);
    this.setAlertToggle = this.setAlertToggle.bind(this);
    this.setDisabledToggle = this.setDisabledToggle.bind(this);
    this.setState = this.setState.bind(this);
  }

  setEmail(value) {
    this.setState({ email: value });
  }

  setPassword(value) {
    this.setState({ password: value });
  }

  setRepeatPassword(value) {
    this.setState({repeatPassword: value});
  }

  emailValidation() {
    emailValidationToggle(this.setState, this.state.email);
    this.setDisabledToggle();
  }

  async passwordValidation(value) {
    await this.setPassword(value);
    passwordValidationToggle(this.setState, this.state.password);
    this.setDisabledToggle();
  }

  async checkPassword(value) {
    await this.setRepeatPassword(value);

    if (this.state.repeatPassword && this.state.repeatPassword !== this.state.password) {
      this.setState({
        repeatPasswordNotice: 'Passwords not match',
        repeatPasswordValid: false
      });
    } else if (this.state.repeatPassword && this.state.repeatPassword === this.state.password) {
      this.setState({
        repeatPasswordNotice: '',
        repeatPasswordValid: true
      }); 
    }
    this.setDisabledToggle();
  }

  setDisabledToggle() {
    this.state.emailValid && this.state.passwordValid && this.state.repeatPasswordValid ? 
      this.setState({ disabledToggle: false }) :
      this.setState({ disabledToggle: true })
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
              onBlur={() => {
                emailValidationToggle(this.setState, this.state.email)
              }} 
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
                this.passwordValidation(event.target.value)
              }
              onBlur={event => 
                this.passwordValidation(event.target.value)
              }
            />
            <FormHelperText error component={'div'}>
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
                this.checkPassword(event.target.value)
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
        <SuccessAlert 
          alertToggle={this.state.alertToggle} 
          setAlertToggle={this.setAlertToggle} 
          setLoginStatus={this.props.setLoginStatus} 
        />
      </ThemeProvider>
    );
  }
}

export default withRouter(SignUp);