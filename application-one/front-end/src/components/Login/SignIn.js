import React from 'react';
import { Button, TextField, FormControl, FormHelperText, ThemeProvider } from '@material-ui/core';
import theme from '../styles';
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
      <ThemeProvider theme={theme}>
        <form className="forms-container">
          <TextField 
            required 
            id="email" 
            label="E-mail" 
            type="email" 
            color="secondary" 
          />
          <FormControl>
            <TextField
              required 
              id="password" 
              label="Password" 
              type="password" 
              color="secondary" 
            />
            <FormHelperText error></FormHelperText>
          </FormControl>
          <Button className="login-btn" type="submit"  variant="contained" color="primary" disableElevation>Login</Button>
          <Button color="secondary" onClick={() => this.setLoginStatus()}>Sign Up</Button>
        </form>
      </ThemeProvider>
    );
  }
}

export default SignIn;