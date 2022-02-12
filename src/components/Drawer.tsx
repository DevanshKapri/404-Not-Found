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

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    button: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
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
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          hideBackdrop={false}
          elevation={16}
        >
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
          </Box>
          <IconButton onClick={handleClick}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Drawer>
      </div>
    </>
  )
}

export default DrawerMain;