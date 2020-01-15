function passwordValidationToggle(setState, password) {
  if (!password) {
    setState({passwordNotice: 'Please fill out the password'});
  } else {
    setState({passwordNotice: ''});
  
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    let hasLowerCaseLetters = password.match(lowerCaseLetters);
    let hasUpperCaseLetters = password.match(upperCaseLetters);
    let hasNumbers = password.match(numbers);
    let qualifyLengths = password.length >= 8 && password.length <=16;

    hasLowerCaseLetters ? 
      setState({passwordLowercaseNotification: ''}) : 
      setState({passwordLowercaseNotification: 'Password must contain at least a lowercase letter'})
    ;
    hasUpperCaseLetters ? 
      setState({passwordUppercaseNotification: ''}) : 
      setState({passwordUppercaseNotification: 'Password must contain at least an uppercase letter'})
    ;
    hasNumbers ? 
      setState({passwordNumberNotification: ''}) : 
      setState({passwordNumberNotification: 'Password must contain at least a number'})
    ;
    qualifyLengths ? 
      setState({passwordLengthNotification: ''}) : 
      setState({passwordLengthNotification: 'Password must contain 8-16 characters'})
    ;

    hasLowerCaseLetters && hasUpperCaseLetters && hasNumbers && qualifyLengths ?
      setState({ passwordValid: true }) :
      setState({ passwordValid: false })
    ;
  }
};

module.exports = {
  passwordValidationToggle
};