import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';

const Layout: React.FunctionComponent = () => (
  <>
    <Header />
    <main>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Outlet />
      </Grid>
    </main>
    <Footer />
  </>
);

export default Layout;
