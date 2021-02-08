import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/styles';
import Logo  from '../assets/img/logoJSX.svg';


const UniIcon = ({original, color, size,...props}) =>  {
  const classes = makeStyles(theme=>{

    let colorSchema = theme.palette[color]?.main
    let originalSyle = colorSchema ? {
      cls1:{ fill:colorSchema },
      cls2:{ fill:colorSchema }     
    } : original || color === 'original' ? {
      cls1:{ fill:theme.palette.primary.main },
      cls2:{ fill:theme.palette.accent.main  }
    } : {}

    const iconSize = size ? 
    {
      height: theme.spacing(size),
      width: theme.spacing(size)
      
    } : {  height: '100%' } 

    return {
      imageIcon: {  
        ...iconSize
      },
      iconRoot: { textAlign: 'center'},
      ...originalSyle
    }
  })()
  return (
    <SvgIcon className={classes.imageIcon} {...props}
    >
     <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 813.17 676.34">
        <circle className={classes.cls1} cx="634.14" cy="273.96" r="34.65"/>
        <circle className={classes.cls1} cx="417.04" cy="76.66" r="36.83"/>
        <path className={classes.cls1} d="M290.05,482.08a54.63,54.63,0,0,1-60,54.37c-28.4-2.71-49.26-28.19-49.26-56.72V344.39a36.68,36.68,0,0,0-36.68-36.68h0a36.68,36.68,0,0,0-36.68,36.68V481.68a128,128,0,0,0,128,128h0a128,128,0,0,0,128-128V344.39a36.68,36.68,0,0,0-36.68-36.68h0a36.69,36.69,0,0,0-36.69,36.68Z"/>
        <path className={classes.cls2} d="M362.42,302.1a54.63,54.63,0,0,1,60-54.37c28.4,2.71,49.26,28.19,49.26,56.72V573.2a36.68,36.68,0,0,0,36.68,36.68h0A36.68,36.68,0,0,0,545,573.2V302.5a128,128,0,0,0-128-128h0a128,128,0,0,0-128,128v113a36.69,36.69,0,0,0,36.69,36.68h0a36.68,36.68,0,0,0,36.68-36.68Z"/>
        <rect className={classes.cls1} x="597.45" y="335.18" width="73.37" height="274.7" rx="36.68"/>
      </svg>
    </SvgIcon> 
  )
}

export default UniIcon;