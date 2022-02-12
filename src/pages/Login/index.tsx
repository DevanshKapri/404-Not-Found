import React from 'react';
import {
  Box, Grid, Typography, Button, List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Avatar,
} from '@mui/material';
// import Header from './components/Header'
import { createStyles, makeStyles, withStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Form, FormikFormProps, Formik, Field, FieldProps } from 'formik';
import * as yup from 'yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    Navbar: {
      display: 'flex',
      padding: '0 40px',
      justifyContent: 'space-between',
      color: 'white',
      backgroundColor: '#00408F'
    },
    logo: {
      cursor: 'pointer',
      color: 'white',
      fontSize: '40px',
      '&:hover': {
        cursor: 'pointer',
      }
    },
    btnMain: {
      margin: '25px',
    },
    root: {
      minHeight: '100vh',
      backgroundColor: '#0B58CC',
    },
    paper: {
      width: '600px',
      minHeight: '60vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#00408F',
      marginBottom: theme.spacing(2),
      padding: theme.spacing(5),
      boxSizing: 'border-box',
      borderRadius: '25px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        width: '96%',
      },
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      padding: '0',
    },
    link: {
      cursor: 'pointer',
      color: 'blue',
    },
    details: {
      textAlign: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#7638FF',
    },
    form: {
      width: '100%',
      minHeight: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }
  })
))

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Provide a valid Email ID')
    .required('Email cannot be empty'),
  password: yup
    .string()
    .min(6, 'Password must be minimum of 6 characters')
    .required('Password cannot be empty'),
});

const initialValues = {
  password: '',
  email: '',
};

const handleSubmit = ((values: any) => {
  console.log(JSON.stringify(values));
})

const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <>
      <Grid className={classes.root}>
        <Grid container alignItems="center" className={classes.Navbar}>
          <Link to='/' className={classes.logo}>
            CryptoPredict
          </Link>
          <Box className={classes.btnMain}>
            <Button
              variant='contained'
              onClick={() => navigate('/login')}
              // className={classes.menuBtn}
              sx={{
                backgroundColor: '#FF0090', '&:hover': {
                  backgroundColor: '#c60063',
                },
              }}
            >
              Signup
            </Button>
          </Box>
        </Grid>
        <Grid container alignItems="center" className={classes.form}>
          <Formik
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            {({ values, setValues }) => (
              <Form aria-label='Sign up form' id='sign-up-form'>
                <Box>
                  <Paper elevation={4} className={classes.paper}>
                    <Avatar className={classes.avatar}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h3' variant='h3'>
                      Log In
                    </Typography>
                    <ListItem>
                      <Field name='email'>
                        {({
                          field,
                          meta,
                        }: FieldProps<typeof initialValues['email']>) => (
                          <TextField
                            fullWidth
                            id='name-input'
                            label='Email'
                            required
                            {...field}
                            error={!!(meta.touched && meta.error)}
                            helperText={meta.touched ? meta.error : ''}
                            variant='outlined'
                            size='small'
                            className={classes.textField}
                          />
                        )}
                      </Field>
                    </ListItem>
                    <ListItem>
                      <Field name='password'>
                        {({
                          field,
                          meta,
                        }: FieldProps<typeof initialValues['password']>) => (
                          <TextField
                            fullWidth
                            id='name-input'
                            label='Password'
                            required
                            {...field}
                            error={!!(meta.touched && meta.error)}
                            helperText={meta.touched ? meta.error : ''}
                            variant='outlined'
                            size='small'
                            className={classes.textField}
                          />
                        )}
                      </Field>
                    </ListItem>
                    <Grid container padding="8px 16px">
                      <Grid item xs>
                        <Link to='/'
                          // onClick={() => setOpenPass(true)}
                          // variant='body2'
                          className={classes.link}
                        >
                          Forget password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link to='/'
                          onClick={() => navigate('/signup')}
                          // variant='body2'
                          className={classes.link}
                        >
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Box className={classes.btnMain}> <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      // className={classes.submit}
                      sx={{
                        backgroundColor: '#FF0090', '&:hover': {
                          backgroundColor: '#c60063',
                        },
                      }}
                    >
                      Log in
                    </Button></Box>

                  </Paper>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  )
}

export default Login