import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHover } from './utils'

// width: 100%;
// display: flex;
// min-height: 100px;
// padding-left: 15px;
// border-radius: 10%;
// padding-right: 15px;
// padding-bottom: 15px;
// background-color: #dbe1ed;
const Tarjeta = ({ minWidth, header, footer, actions, children, overflow, color, ...props}) => {
  
const classes = makeStyles(theme=>{
  let BASE_COLOR =  theme.palette.base.main
  let BASE_TEXT =   theme.palette.grey['700']
  if(color==='primary') {
    BASE_COLOR =  theme.palette.primary.main
    BASE_TEXT = theme.palette.base.main
  }
  if(color==='accent'){
    BASE_COLOR =  theme.palette.accent.main
    BASE_TEXT = theme.palette.base.main
  }
  console.log(theme.palette)
  return {
    root: {
      minWidth: minWidth|| props.width || 275,
      maxWidth:props.width,
      backgroundColor: BASE_COLOR,
      color: BASE_TEXT,
      overflow:  overflow ? 'visible' : 'hidden',
      marginTop:  overflow ? 40 : null
    },
    header: {
      paddingLeft:'16px',
      paddingRight:'16px',
      paddingTop:'5px',
      display: "flex",
      alignItems: "center",
      boxSizing: "inherit",
      color:BASE_TEXT,
    },  
    footer: {
      paddingLeft:'16px',
      paddingRight:'16px',
      paddingBottom:'5px',
      display: "flex",
      alignItems: "center",
      boxSizing: "inherit",
      color:BASE_TEXT,
    },
    line: {
      margin: 3,
      borderTopColor: theme.palette.base.dark,
    },
    overflow:{
      top:-30,
    }
  }})()

  const [hooverRef, isHovered] = useHover()


  return (
    <Card
      ref={hooverRef}
      className={` ${props.className} ${classes.root}`} 
      elevation={isHovered ? 8 : 3} >
      { overflow && <div className={classes.overflow}>
        {overflow}
        </div>}
      {header &&
      <div>
        <div className={classes.header} >
          <div className="tag4">
            { header }
          </div> 
        </div>
        <hr className={classes.line}></hr>
      </div>
      }
      <CardContent>
        {children}
      </CardContent>
      {actions &&
      <CardActions>
        {actions}
      </CardActions>
      }
      {footer &&
        <div>
          <hr className={classes.line}></hr>
          <div className={classes.footer} >
            <div className="tag4">
              { footer }
            </div> 
          </div>
        </div>
      }
    </Card>
  );
}

export default Tarjeta;