import React from 'react';
import  {COLORS } from '../uiTheme'
import { CircularProgress, Button, IconButton, Tooltip, Fab} from '@material-ui/core';
import { Crop32 } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { getIcon } from './utils'


const BaseIconButton = ({icon, iconName, size, variant, ...props}) => {
  let FoundIcon = icon || getIcon(iconName)
  return ( variant === 'fab'? 
      <Fab {...props} > 
        { props.children ? props.children
          : FoundIcon 
          ? <FoundIcon {...props} fontSize="inherit" />
          : <Crop32 {...props} fontSize="inherit" />}
      </Fab>
    :
    <div>
      <IconButton  > 
        { props.children ? props.children
          : FoundIcon 
          ? <FoundIcon {...props} fontSize="inherit" />
          : <Crop32 {...props} fontSize="inherit" />}
      </IconButton>
    </div>
  )
}


const BaseIconTooltip = props => {

  return (<div> 
      {props.content ? 
        <Tooltip title={props.content}>
          <div> 
            <BaseIconButton {...props}/>
          </ div>
        </Tooltip> : <BaseIconButton {...props}/>
      }
    </div>)
  }

const UniButton = ({ color, loading, content, variant, size, iconSize,...props }) => {
  
  let radius = variant === 'square' ? 2 : 25
  variant = variant === 'icon' || 'text' || 'fab' ? variant :'contained'
  let _iconSize = iconSize || size === 'large' ? '50px' : size === 'small' ? '20px' : '35px'
  if(color==='original' && variant === 'icon') props.original=true

  const classes = makeStyles(theme => {
    let baseColor = theme.palette[color] || theme.palette['primary'] 
    let sizestyle = {
      minHeight:'35px',
      paddingLeft:'17px',
      paddingRight:'17px'
    }
    if (size==='large') sizestyle = { 
      minHeight:'50px',
      fontSize:'0.9rem', 
      paddingLeft:'22px',
      paddingRight:'22px',
      paddingTop:'10px',
      paddingBottom:'10px'
    }
    if (size==='small') sizestyle = {
      minHeight:'20px',
      fontSize:'0.6rem',
      padding:'2px',
    }
    let variantStyle = {}
    if (variant === 'text') variantStyle = {
        color: baseColor.main,
        '&:hover': {
          color: baseColor.dark
        } 
      }
    else variantStyle = {
        color: 'white',
        backgroundColor: baseColor.main,
        borderRadius: radius,
        '&:hover': {
          backgroundColor: baseColor.dark,
          color: theme.palette[baseColor.text]
        }
      }
    
    if (props.disabled) {
      variantStyle = { 
        borderRadius: radius,
        color : theme.palette.grey['900'],
        backgroundColor: theme.palette.grey['300'] 
      }  
    }

    return {
      root: {
        fontSize:'0.7rem',
        ...sizestyle,
        ...variantStyle
      },
      CircularProgress:{
        color:theme.palette[baseColor.oposite].main
      },
      Icon:{
        color:  baseColor.main,
        fontSize: _iconSize
      }
    }
  
  
  })();

  return (
    <div> {variant === 'icon' || variant === 'fab' ?
      <BaseIconTooltip  {...props} content={content} variant={variant}
        className={`${classes.Icon}`} size={size}>
          {props.children}
        </BaseIconTooltip>
      : 
      <Button {...props} 
        className={`${classes.root} ${props.className}`} >
        { Boolean(loading)
          ? <CircularProgress 
          className={classes.CircularProgress}
          size={16} />
          : content ? content
          : props.children}
      </Button>
    }
  </div>
  )
}


export default UniButton;