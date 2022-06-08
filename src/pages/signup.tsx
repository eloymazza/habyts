import React from 'react';
import { Grid } from '@mui/material';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import classes from '../styles/signup.module.css';

const SignUp: React.FunctionComponent = () => (
  <Grid item xs={10} md={5}>
    <div className={classes.formContainer}>
      <SignUpForm />
    </div>
  </Grid>
);

export default SignUp;
