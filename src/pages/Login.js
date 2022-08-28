import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);
  const navigate = useNavigate();

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify(email));
    navigate('/home');
  };

  useEffect(() => {
    const verifyEmail = () => {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return validEmail.test(email);
    };

    const verifyPassword = () => {
      const MIN_LEN_PASS = 6;
      return password.length >= MIN_LEN_PASS;
    };

    const handleLoginDisable = () => {
      if (verifyEmail() && verifyPassword()) {
        setLoginDisabled(false);
        return;
      }
      setLoginDisabled(true);
    };

    handleLoginDisable();
  }, [email, password]);

  return (
    <section>

      <h1>Pokédex</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={handleEmail}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={handlePassword}
      />

      <div className="margin-five d-grid gap-2">
        <button
          type="button"
          disabled={loginDisabled}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

    </section>
  );
}

export default Login;
