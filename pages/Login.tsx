import * as React from 'react';
import { useFormik } from 'formik';
import { Box, Container } from '@mui/material';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: () => {},
  });
  return (
    <div>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}></form>
          <p>Dashboard</p>
          <p>Sign in</p>
          <p>Sign in on the internal platform</p>
          <p>Login with Facebook</p>
          <p>Login with Google</p>
          <p>or login with email address</p>
          <p>Email Address</p>
          <p>Email Address</p>
          <p>Password</p>
          <p>Password</p>
          <p>Sign In Now</p>
          <p>Don't have an account? Sign Up</p>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
