import React from 'react';

function Login() {
  return (
    <div className="Login">
      <div className="forms-container">
        <form action="">
          <input type="text" name="email" />
          <input type="text" name="password" />
          <span>Sign Up</span>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
