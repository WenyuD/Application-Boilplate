async function authenticationCheck(data) {
  try {
    const response = await fetch(`http://localhost:3001/dashboard?token=${data}`);
    const result = await response.json();
    return result;
  } catch(err) {
    return 'Token not valid';
  }
};

export default authenticationCheck;