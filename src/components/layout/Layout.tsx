import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import classes from './Layout.module.css';

const Layout: React.FC = () => (
  <div>
    <Header />
    <main className={classes.mainContent}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
