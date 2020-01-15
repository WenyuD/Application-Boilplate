function passwordValidationToggle(setState, password) {
  setState({passwordNotice: ''});

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  password.match(lowerCaseLetters) ? 
    setState({passwordLowercaseNotification: ''}) : 
    setState({passwordLowercaseNotification: '⬤ Password must contain at least a lowercase letter'})
  ;
  password.match(upperCaseLetters) ? 
    setState({passwordUppercaseNotification: ''}) : 
    setState({passwordUppercaseNotification: '⬤ Password must contain at least an uppercase letter'})
  ;
  password.match(numbers) ? 
    setState({passwordNumberNotification: ''}) : 
    setState({passwordNumberNotification: '⬤ Password must contain at least a number'})
  ;
  password.length >= 8 && password.length <=16 ? 
    setState({passwordLengthNotification: ''}) : 
    setState({passwordLengthNotification: '⬤ Password must contain 8-16 characters'})
  ;
};

module.exports = {
  passwordValidationToggle
};