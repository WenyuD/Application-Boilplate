import action from '../action/checkAuth';

const checkAuth = cookie => {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/dashboard');
    const data = response.json();
    dispatch(action.checkAuth(data));
  }
};

export default { checkAuth };