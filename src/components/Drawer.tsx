import React, { Dispatch, SetStateAction } from 'react'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  ClickAwayListener,
  Button,
  Grid,
  Box,
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { createStyles, makeStyles, withStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    button: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      marginBottom: '25px'
    },
    menuBtn: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    listItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    switchBtn: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '100vh',
      paddingBottom: '30px',
      boxSizing: 'border-box'
    }
  })
))

interface DrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}



const DrawerMain: React.FC<DrawerProps> = ({
  open,
  setOpen,
}) => {
  const drawerWidth: string = '250px'
  const handleClick = () => {
    console.log('here')
    setOpen(!open);
  }

  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <>
      <div>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#0B58CC'
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          hideBackdrop={false}
          elevation={16}
        >
          <Box className={classes.main}>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <ListItemButton onClick={handleClick} className={classes.listItem}>
                  <ListItemText primary="Shubh" className={classes.listItem} />
                </ListItemButton>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemButton onClick={handleClick} className={classes.listItem}>
                  <ListItemText primary="Shubh" className={classes.listItem} />
                </ListItemButton>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemButton onClick={handleClick} className={classes.listItem}>
                  <ListItemText primary="Shubh" className={classes.listItem} />
                </ListItemButton>
              </ListItem>
            </List>
            <Box>
              <Box className={classes.button}>
                <Box className={classes.menuBtn}>
                  <Button
                    variant='contained'
                    // onClick={() => router.push('/login')}
                    sx={{
                      backgroundColor: '#FF0090', '&:hover': {
                        backgroundColor: '#c60063',
                      },
                    }}
                  >
                    Signup
                  </Button>
                </Box>
                <Box className={classes.menuBtn}>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: '#FF0090', '&:hover': {
                        backgroundColor: '#c60063',
                      },
                      width: '100%',
                    }}
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                </Box>
                <Divider />
              </Box>
              <IconButton onClick={handleClick} className={classes.switchBtn}>
                {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </Box>
          </Box>

        </Drawer>
      </div>
    </>
  )
}

export default DrawerMain;