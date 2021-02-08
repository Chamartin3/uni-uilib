import React from 'react';

import {
  Zoom,
  Modal,
  Card
} from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Children } from 'react';
import UniButton from './Button'
import UniIcon from './Icon'
import { getIcon } from './utils'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      width: theme.spacing(13),
      height: theme.spacing(13),
      backgroundColor:theme.palette.accent.main,
    }
  })
);


const AccessModal = ({ open, handleClose, variant, Icon,message,handleCancel, handleConfirm,...props }) => {
  const classes = useStyles();
  const [registry, setRegistry] = React.useState(false);

  return (
    <Modal
      open={Boolean(open)}
      onClose={handleClose}
      className={classes.modal}>
        <Zoom in={Boolean(open)}>

      {variant === 'confirm' ? 
        <Card className="primary py-4 mt-5">
          <div className="container px-3 text-center center">
            <div className="justify-center my-2">
            <Avatar  className={classes.icon} >
              <UniIcon size={10} color="base"/>
            </Avatar>
            </div>
            <div className="justify-center my-2 dark">
              <h3>
                {message ||
                '¿ Desea confirmar esta acción ?'
              }
              </h3>
            </div>
            <div className="justify-center my-2">
              <UniButton className="mx-3" 
                onClick={handleCancel}
                color="error" content="Cancelar" /> 
              <UniButton className="mx-3" 
                onClick={handleConfirm}
                color="success" content="Confirmar" /> 
            </div>
          </div>
        </Card> : 
        <Card className="primary py-4 center">
          <div className="container dark">
            {props.children}
          </div>
        </Card>
      }
      </Zoom>
    </Modal>
  )
}

export default AccessModal