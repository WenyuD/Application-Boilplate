function emailValidationToggle(setState, email) {
  setState({emailNotice: ''});

  const emailValidationRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  emailValidationRegex.test(email) ? 
    setState({emailNotice: '', emailValid: true }) : 
    setState({emailNotice: 'Please enter a valid email address', emailValid: false })
  ;

};

module.exports = {
  emailValidationToggle
};