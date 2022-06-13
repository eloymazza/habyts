import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import { useAuth } from '../../store/auth-context';

const SignUpForm: React.FunctionComponent = () => {

  const { signup } = useAuth();
  const navigate = useNavigate();

  const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const { user } = await signup(values.email, values.password);
        sendEmailVerification(user);
        alert('A notification email was sent, please verify email to continue');
        navigate('/login');
      } catch (e) {
        alert('error ocurred');
      }
    },
    validationSchema: signUpSchema
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">
        Email Address
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
