import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginCreate } from './LoginCreate';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';
import LoginForm from './LoginForm';
import { UserContext } from '../../UserContext';

export const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="criar" element={<LoginCreate />} />
        <Route exact path="perder" element={<LoginPasswordLost />} />
        <Route exact path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};
