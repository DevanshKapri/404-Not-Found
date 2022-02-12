import React from 'react';
import {
  Box, Grid, Typography, Button, List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
// import Header from './components/Header'
import { createStyles, makeStyles, withStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../../components/Drawer';


const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    Navbar: {
      display: 'flex',
      justifyContent: 'space-around',
      color: 'white',
    },
    logo: {
      '&:hover': {
        cursor: 'pointer',
      }
    },
    navLink: {
      display: 'flex',
      justifyContent: 'space-around',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    button: {
      display: 'flex',
      justifyContent: 'space-around',

    },
    root: {
      minHeight: '100vh',
      background: `url(/bglanding.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    body: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
    },
    title: {
      // margin: '20px',
      color: 'white'
    },
    data: {
      color: 'white',
      margin: '20px',
    },
    btnMain: {
      marginRight: '25px',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    left: {
      width: '40%',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    right: {
      width: '40%',
    },
    mobileDrawer: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'block',
      },
      color: 'white',
      padding: '20px',
    }
  })
))

// const Btn = withStyles((theme: Theme) => ({
//   root: {
//     // color: theme.palette.getContrastText('#3997F5'),
//     backgroundColor: 'white',
//     border: '2px solid white',
//     borderRadius: '25px',
//     padding: '10px 20px',
//     '&:hover': {
//       backgroundColor: '#7638FF',
//       color: 'white'
//     },
//   },
// }))(Button);
function Landing() {
  const [open, setOpen] = React.useState<boolean>(false)
  const classes = useStyles()
  console.log(open);
  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <>
      <Grid className={classes.root}>
        <Grid container alignItems="center" className={classes.Navbar}>
          <Typography variant='h5' className={classes.logo}>
            CryptoPredict
          </Typography>
          <List className={classes.navLink}>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Shubh" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Shubh" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Shubh" />
              </ListItemButton>
            </ListItem>
          </List>
          <Box className={classes.button}>
            <Box className={classes.btnMain}>
              <Button
                variant='contained'
                // onClick={() => router.push('/login')}
                // className={classes.menuBtn}
                sx={{
                  backgroundColor: '#FF0090', '&:hover': {
                    backgroundColor: '#c60063',
                  },
                }}
              >
                Login
              </Button>
            </Box>
            <Box className={classes.btnMain}>
              <Button
                variant='contained'
                // onClick={() => router.push('/login')}
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
            <Box className={classes.mobileDrawer}>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={handleOpen}
              >
                <MenuIcon fontSize='large' />
              </IconButton>
            </Box>

          </Box>
        </Grid>
        <Box className={classes.body}>
          <Box className={classes.left}>
            <Typography variant='h4' className={classes.title}>CryptoPredict</Typography>
            <Typography sx={{ margin: '20px' }} className={classes.data}>Get all the details of cryptocurrency, with visual representation at one place</Typography>
            <Button variant='contained'
              // onClick={() => router.push('/login')}
              // className={classes.menuBtn}
              sx={{
                backgroundColor: '#FF0090', '&:hover': {
                  backgroundColor: '#c60063',
                },
              }}>Get Started</Button>
          </Box>
          <Box className={classes.right}>
            <Drawer open={open} setOpen={setOpen} />
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Landing