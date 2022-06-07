import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header: React.FunctionComponent = () => (
  <header className={classes.header}>
    <button type="button">
      <Link to="/register">Register</Link>
    </button>
    <button type="button">
      <Link to="/login">Login</Link>
    </button>
  </header>
);

export default Header;
