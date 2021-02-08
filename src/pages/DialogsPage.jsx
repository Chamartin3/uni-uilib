import React from 'react';

import UniButton from '../components/Button'
import { UniAlert } from '../components'
const View = props => {
  const alertRef = React.useRef();
  const [ formModal , setFormModal ] = React.useState();
  const [ infoModal , setInfoModal ] = React.useState();
  const [ confirmModal , setConfirmModal ] = React.useState();

  const openSuccess = () => {
    alertRef.current.open('Se ha perdido la conexión')
  }

  const callAlert = type => {
    if(type==='notif') alertRef.current.open('Mensaje de información')
    if(type==='warning') alertRef.current.open('Advertencia', 'warning')
    if(type==='success') alertRef.current.open('Mensaje de exito', 'success')
    if(type==='waiting') alertRef.current.open('En Espera', 'waiting' , true)
    if(type==='error') alertRef.current.open('Mensaje de error', 'error')
  }


  return (
    <div className="container">
      <h1>Ventanas y Alertas</h1>
      <hr/>

      <div className='row justify-center  text-center my-10'> 
       <p>
         Componentes utilizados para proveer o solicitar in información puntual sin abandonar la ubicación actual
       </p>
      </div>           
      <div className='row justify-around  text-center my-10'> 
        <div className='centered my-2'>
            <UniButton  size="large" color="accent" content="Información" />
        </div>           
        <div className='centered my-2'>
            <UniButton size="large" color="accent" content="Formulario" />
        </div>         
        <div className='centered my-2'>
            <UniButton size="large" color="accent" content="Confirmación" />
        </div>           
      </div>

               
        <div className='row justify-around  text-center my-10'> 
            <div className="subtitulo"> Notificaciones </div>
        </div> 
        <UniAlert ref={alertRef} />
        <div className='row justify-around  text-center my-10'> 
            <div className='centered my-2'>
                <UniButton size="large"  content="En Espera"  onClick={()=>callAlert('waiting')}  />
            </div>    

            <div className='centered my-2'>
                <UniButton size="large"  content="Éxito" onClick={()=>callAlert('success')} />
            </div>    
      

            <div className='centered my-2'>
                <UniButton size="large"  content="Error"  onClick={()=>callAlert('error')}  />
            </div>              
             
            <div className='centered my-2'>
                <UniButton size="large"  content="Advertencia"  onClick={()=>callAlert('warning')}  />
            </div>    

              <div className='centered my-2'>
                <UniButton size="large"  content="Notificación" onClick={()=>callAlert('notif')} />
            </div>    
        </div>   


    </div>
  )
}

export default View