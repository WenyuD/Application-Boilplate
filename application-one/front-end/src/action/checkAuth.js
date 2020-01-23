const checkAuth = cookie => ({
  type: 'CHECK_AUTH',
  payload: {
    cookie
  }
});

export default { checkAuth };