import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AdbIcon from '@mui/icons-material/Adb';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useDispatch, useSelector } from 'react-redux';
import BotSettings from './pages/BotSettings.jsx';
import BotStats from './pages/BotStats.jsx';
import Engagement from './pages/Engagement.jsx';
import Moderation from './pages/Moderation.jsx';
import Premium from './pages/Premium.jsx';
import Support from './pages/Support.jsx';
import Utility from './pages/Utility.jsx';
import { updateCurrentPage } from '../../reducers/pageSlice';

const drawerWidth = 240;

const SideBar = () => {
  const { currentPage } = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updatePage = (e) => {
    dispatch(updateCurrentPage(e.target.innerHTML));
  };

  const pages = {
    Support: <Support />,
    Premium: <Premium />,
    Engagement: <Engagement />,
    Utility: <Utility />,
    Moderation: <Moderation />,
    'Bot Stats': <BotStats />,
    'Bot Settings': <BotSettings />,
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgb(63, 82, 99)',
        }}
      >
        <Toolbar href="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate('/')}
          >
            Mokno Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Bot Stats', 'Support', 'Premium', 'Bot Settings'].map(
              (text, index) => (
                <ListItem key={text} disablePadding onClick={updatePage}>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 || index === 3 ? (
                        <AdbIcon />
                      ) : (
                        <MonetizationOnIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ),
            )}
          </List>
          <Divider />
          <List>
            {['Engagement', 'Utility', 'Moderation'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={updatePage}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <NoteAltIcon /> : <NoteAltIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: 'rgb(37, 33, 44)',
          color: 'whitesmoke',
        }}
      >
        <Toolbar />
        {pages[currentPage]}
      </Box>
    </Box>
  );
};

export default SideBar;
