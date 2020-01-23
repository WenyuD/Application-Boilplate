import action from '../action/checkAuth';

const checkAuth = data => {
  return async dispatch => {
    const response = await fetch(`http://localhost:3001/dashboard?token=${data}`);
    const result = await response.json();
    dispatch(action.checkAuth(result));
  }
};

export default { checkAuth };