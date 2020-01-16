const initState = {
  email: ''
};

export default function setReducer(state = initState, action) {
  if (action.type === 'CHECK_AUTH') {
    return {
      ...state,
      email: action.payload
    }
  };
  if (action.type === 'SIGN_IN') {
    return {
      ...state,
      isLogin: true
    }
  };
  if (action.type === 'SIGN_OUT') {
    return {
      ...state,
      isLogin: false
    }
  };
}