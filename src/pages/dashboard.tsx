import React from 'react';
import { Link } from 'react-router-dom';

const dashboard: React.FunctionComponent = () => (
  <>
    <h1>Dashboard</h1>
    <Link to="/">Logout</Link>
  </>
);

export default dashboard;
