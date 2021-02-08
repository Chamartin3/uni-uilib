import React from 'react';

import {
  Modal
  Zoom,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);


const AccessModal = ({ open, handleClose, ...props }) => {
  const classes = useStyles();
  const [registry, setRegistry] = React.useState(false);
  let showingRegistry = open && registry
  let showingLogin = open && !registry

  return (
    <Modal
      open={Boolean(open)}
      onClose={handleClose}
      className={classes.modal}>  
      { registry ?
        <Zoom in={showingRegistry}>
          <div>
          </div>
        </Zoom>
      : <Zoom in={showingLogin}>
          <div>
          </div>
        </Zoom>
      }
    </Modal>
  )
}

export default AccessModal