import React, { Dispatch, SetStateAction } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import DrawerMain from "./Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    navLink: {
      display: 'flex',
    },
    logo: {
      fontSize: '40px',
    },
  })
)

interface DrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<DrawerProps> = ({
  open,
  setOpen,
}) => {
  const classes = useStyles();



  return (
    <>
      <AppBar position="static" color='primary'>
        <CssBaseline />
        <Toolbar className={classes.root} >
          <Typography className={classes.logo}>
            Navbar
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
        </Toolbar>
      </AppBar >
      <DrawerMain
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
export default Navbar;
