import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authRequest } from '../../../../redux/actions';

const Computs = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(authRequest(username, password));
  };

  return (
    <div>
      <h2>Login</h2>
      {auth.error && <p>{auth.error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {auth.user && <p>Welcome, {auth.user}!</p>}
    </div>
  );
};

export default Computs;
