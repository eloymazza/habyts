import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/home';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import NotFound from './pages/notFound';

const App: React.FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
