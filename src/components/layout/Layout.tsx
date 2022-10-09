import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
