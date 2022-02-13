import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, ListItemButton } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { ClassNames } from '@emotion/react';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import Notifications from '../../components/Notification';
import Coin from '../../components/Coin';
import ChartManager from '../../components/graph_comp/ChartManager';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const useStyles = makeStyles((theme: Theme) => ({
  drawerRoot: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    fontSize: '30px',
  },
  navRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#00408F',
  }

}))



const Dashboard = (props: Props) => {
  const [key, setKey] = React.useState<Number>(1)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('keymain')
    navigate('/')
  }

  React.useEffect(() => {
    if (localStorage.getItem('keymain') === null || localStorage.getItem('keymain') === 'undefined' || localStorage.getItem('keymain') === undefined || localStorage.getItem('keymain') === 'null') {
      navigate('/login')
    }
  })

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles()

  const drawer = (
    <Box className={classes.drawerRoot}>
      <Avatar>S</Avatar>
      <Divider />
      {/* <Typography sx={{ margin: '5px 0' }}>Username</Typography> */}
      {/* <Typography>UserEmail</Typography> */}
      <Divider />
      <List>
        <ListItem
          button
          selected={key === 1}
          onClick={() => setKey(1)}
          sx={{ '&select': { backgroundColor: 'red' } }}>
          <ListItemIcon><FactCheckIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary='Watchlist' />
        </ListItem>
        <ListItem button
          selected={key === 2}
          onClick={() => setKey(2)}
        >
          <ListItemIcon><NotificationsActiveIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary='Notifications' />
        </ListItem>
        <ListItem button
          selected={key === 3}
          onClick={() => setKey(3)}
        >
          <ListItemIcon><EqualizerIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary='Graph' />
        </ListItem>
        <ListItem
          button
          onClick={handleLogout}
        >
          <ListItemIcon><LogoutIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary='Logout' />
        </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={classes.navRoot}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to='/' className={classes.link}>
              CryptoPredict
            </Link>
          </Typography>
          <Button variant='contained'
            // onClick={() => navigate('/login')}
            // className={classes.menuBtn}
            onClick={handleLogout}
            sx={{
              display: { xs: 'none', md: 'block' },
              backgroundColor: '#FF0090', '&:hover': {
                backgroundColor: '#c60063',
              },

            }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#00408F', },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#00408F', },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {
          key === 2 ? <Notifications /> : key === 1 ? <Coin /> : <ChartManager />
        }
      </Box>
    </Box>
  );
}


export default Dashboard