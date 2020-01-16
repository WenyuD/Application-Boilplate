const checkAuth = cookie => ({
  type: 'CHECK_AUTH',
  paylaod: {
    cookie
  }
});

export default { checkAuth };