import React from 'react';
import { Paper, Card, UniButton } from '../components'
import Avatar from '@material-ui/core/Avatar';
import { getIcon } from '../components/utils'
import { makeStyles } from '@material-ui/core/styles';
// import UniButton from './Button'

const View = props => {
  const AlarmIcon = getIcon('Alarm')
  const Wallet = getIcon('AccountBalanceWallet')
  const Insights = getIcon('Settings')
  
  const classes = makeStyles((theme) => ({
    avatar: {
      top:-30,
      margin:'auto',
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    icon:{
      width: theme.spacing(12),
      height: theme.spacing(12),
      backgroundColor:theme.palette.accent.main,
      top:-30,
      left:-10,
      marginBottom:-29
    },
    bigIcon:{
      fontSize:'50px',
    },
    Title:{

    },
    header:{
      // paddingLeft:'16px',
      // paddingRight:'16px',
      // paddingTop:'5px',
      // display: "flex",
      // boxSizing: "inherit",
      // backgroundColor:theme.palette.accent.main,
      color:theme.palette.accent.main
    },
    line: {
      margin: 3,
      borderTopColor: theme.palette.accent.main,
    },
  }))()
  return (
    <div className="container">
      <h1>Tarjetas</h1>
      <hr/>
    <div className='row justify-around align-center text-center my-2'>
      {/* <div className='col-4 centered my-2'> */}
        <Card className="mx-2" footer={
          <div className='text-left' > 
            <AlarmIcon  fontSize="small"/>  &nbsp;
            Útima Actualización:
            <br/>
            <strong> 4-feb-2021 </strong>
          </div> }> 
          <h1 className="text-right"> 1.800.000</h1>
          <h2 className=" subtitulo text-right"> Bs/USD </h2>
        </Card>



        <Card  className="mx-2" footer={
          <div className='row justify-center centered' > 
            <UniButton  variant="text" color='accent'>
              Acceder
            </UniButton>
          </div> }>
              <div className="text-left">
                <Insights className={classes.bigIcon} />
              </div>
          <h2 className="text--white subtitulo text-right"> 
            Configuraciones 
          </h2>
        </Card>

        <Card className="mx-2" color='primary' 
        overflow={<Avatar className={classes.icon}>
          <Wallet className={classes.bigIcon} />
        </Avatar>}> 
          <h1 className="dark subtitulo text-right">  Mi Cartera </h1>
        </Card>

      {/* </div> */}
    </div>
    <div className='row justify-center align-center text-center mt-10'>
    <Card className="ma-5" 
    width={500} >
      <dir className={classes.header}>
        <h1> Titulo </h1>
      </dir>
      <hr className={classes.line} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus repellat atque ullam voluptates, sequi dolor impedit modi est, expedita consequatur cumque accusantium sit dolorum illo molestiae, adipisci necessitatibus quisquam.
    </Card>
      <Card className="my-10" width={500} 
        overflow={<Avatar className={classes.avatar}/>}>
        <div className="text-center ">
          <h1>
            Fulanito DeTal
          </h1>

          <p className="my-4" >
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Ipsum molestias repellat 
            quam quas incidunt ipsam, repellendus, recusandae dignissimos hic ipsa aut omnis 
          </p>
        </div>

        <div className="row">

        <div className="col">
          <div className="tag4">
            <strong>
            Telefonos 
            </strong>
          </div>
          555-55-55 *
          <br></br>
          424-444-55-55
        </div>


        <div className="col">
          <div className="tag4">
            <strong>
            Email 
            </strong>
            <br/>
            <a href="mailto:test@uni.com">
            test@uni.com
            </a>
            </div>
        </div>
        </div>
          
      </Card>
    </div>
    </div>
  )
}

export default View