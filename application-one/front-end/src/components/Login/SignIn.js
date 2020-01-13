import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, TextField, FormControl, FormHelperText, ThemeProvider } from '@material-ui/core';
import theme from '../styles';
import './styles.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailNotice: '',
      passwordNotice: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSignIn = this.fetchSignIn.bind(this);
  }

  setEmail(value) {
    this.setState({email: value, emailNotice: ''});
  }

  setPassword(value) {
    this.setState({password: value, passwordNotice: ''});
  }

  handleSubmit() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.fetchSignIn(data);
  }

  async fetchSignIn(data) {
    const response = await fetch(`http://localhost:3001/login`, { 
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    let checkExists = await response.json();
    if (checkExists === 'User email does not exist!') {
      this.setState({emailNotice: 'This email does not exist!'});
    } else if (checkExists === 'Password incorrect!') {
      this.setState({passwordNotice: 'Incorrect password!'});
    } else {
      this.props.history.push('/dashboard');
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
                this.setPassword(event.target.value)
              }
            />
            <FormHelperText error>{this.state.passwordNotice}</FormHelperText>
          </FormControl>
          <Button 
            className="login-btn" 
            type="submit" 
            variant="contained" 
            color="primary" 
            disableElevation
            onClick={() => this.handleSubmit()}
          >
            Login
          </Button>
          <Button 
            color="secondary" 
            onClick={() => this.props.setLoginStatus()}
          >
            Sign Up
          </Button>
        </form>
      </ThemeProvider>
    );
  }
}

export default withRouter(SignIn);