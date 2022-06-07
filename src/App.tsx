import React from 'react';
import { initializeApp } from 'firebase/app';
import { Routes, Route } from 'react-router-dom';
import firebaseConfig from './config/firebase.config';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import NotFound from './pages/notFound';

initializeApp(firebaseConfig);

const App: React.FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  </Routes>
  // <div className="App">
  //   <h1>Habyts</h1>
  // </div>
);

export default App;
