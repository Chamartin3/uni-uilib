import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { DrawerState, DrawerWidth, SmallScreen } from '@/state'
// import {useRecoilState, useRecoilValue} from 'recoil'

import mainLogo from '../assets/img/logo.svg';

import { useHistory } from "react-router-dom";
import routes from '../pages/routes'


import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
  } from '@material-ui/core';



import {
  ChevronLeft, 
  ChevronRight,
  Person,
  Dashboard
} from '@material-ui/icons';

import  {COLORS } from '../uiTheme'


const LINKS = [
  {
    name:'Inicio',
    path:'/main',
    icon:<Dashboard/>
  },
  {
    name:'Mi Perfil',
    path:'/profile',
    icon:<Person/>
  } 
]

const width = 216
const isSmall = false

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const router = useHistory()
  const [variant, setVariant ] = React.useState('persistent')
  const [open, setOpen] = React.useState(true);
  
  React.useEffect(() => {
    let drawerVariant = isSmall ?  'temporary' : 'persistent' 
    setVariant(drawerVariant) 
  },[ isSmall, open ]);
  
  
  const classes = makeStyles((theme) => ({
      drawer: {
        width: width,
        flexShrink: 0,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaper: {
        width: width,
        backgroundColor: COLORS.base,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }
    }))();


  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Drawer
        className={classes.drawer}
        variant={ variant }
        onClose={handleDrawerClose} 
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img src={mainLogo} alt="Logo Uni" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' 
              ? <ChevronLeft /> 
              : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((name,link) => (
            <ListItem button 
              >
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}
