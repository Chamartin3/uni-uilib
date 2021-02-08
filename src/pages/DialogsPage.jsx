import React from 'react';

import UniButton from '../components/Button'
import { UniAlert, UniDialog, UniTextField } from '../components'


const FormnContents = props => {
  return (
    <div className="text-center">
      <h4 className="mb-4"> Fomulario de datos </h4>
      <form >
        <div className="justify-center my-2">
          <UniTextField
            label="Nombre "
            name="username"
            />
        </div>
        <div className="justify-center my-2">
          <UniTextField 
            label="Contraseña"
            name="password"
            type="password"
          />
        </div>
      </form>
      <UniButton color="accent"  onClick={props.handleOk} content="Enviar" />
    </div>
  )
}

const InfoContents = props => {
  return (
    <div className="row center justify-center px-2" >
      <div className="col text-center">
      <h4 className="mb-4"> Mensaje de información</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, reprehenderit earum dignissimos praesentium impedit eveniet ea eum quasi beatae dolor nesciunt, molestiae soluta neque cumque aut omnis mollitia placeat similique?
      </p>
      <p>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde inventore voluptatem ducimus. Maiores incidunt illo voluptatum ipsa quaerat? Beatae nemo facilis provident assumenda ipsum aspernatur magni aliquid porro aut!

      </p>
      <UniButton color="accent" onClick={props.handleOk} content="Ok" />
      </div>
    </div>
  )
}


const View = props => {
  const alertRef = React.useRef();
  const [ formModal , setFormModal ] = React.useState(false);
  const [ infoModal , setInfoModal ] = React.useState(false);
  const [ confirmModal , setConfirmModal ] = React.useState(false);

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

  const  handleCancel = () =>{
    setConfirmModal(false)
  }
  
  const handleConfirm = () =>{
    setConfirmModal(false)
    alertRef.current.open('Acción confirmada', 'success')
  }


  return (
    <div className="container">
      <h1>Ventanas y Alertas</h1>
      <hr/>
      <UniDialog  
        handleClose={()=>setConfirmModal(false)}
        open={confirmModal} 
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        variant='confirm' />
      <UniDialog 
        handleClose={()=>setInfoModal(false)}
        open={infoModal} >
          <InfoContents handleOk={()=>setInfoModal(false)} />
        </UniDialog>      
      <UniDialog 
        handleClose={()=>setFormModal(false)}
        open={formModal} >
          <FormnContents handleOk={()=>setFormModal(false)} />
        </UniDialog>

      <div className='row justify-center  text-center my-10'> 
       <p>
         Componentes utilizados para proveer o solicitar in información puntual sin abandonar la ubicación actual
       </p>
      </div>           
      <div className='row justify-around  text-center my-10'> 
        <div className='centered my-2'>
            <UniButton 
              onClick={()=>setInfoModal(true)}
              size="large" 
              color="accent" 
              content="Información" />
        </div>           
        <div className='centered my-2'>
            <UniButton 
              onClick={()=>setFormModal(true)}
              size="large" color="accent" content="Formulario" />
        </div>         
        <div className='centered my-2'>
            <UniButton 
              onClick={()=>setConfirmModal(true)}
              size="large" color="accent" content="Confirmación" />
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