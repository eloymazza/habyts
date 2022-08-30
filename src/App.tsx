import React from 'react';
import { initializeApp } from 'firebase/app';
import { Routes, Route } from 'react-router-dom';
import firebaseConfig from './config/firebase.config';
import Layout from './components/layout/Layout';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import Dashboard from './pages/dashboard/dashboard';
import NotFound from './pages/notFound/notFound';

initializeApp(firebaseConfig);

const App: React.FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
