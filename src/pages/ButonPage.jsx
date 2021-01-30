import React from 'react';
import UniButton from '../components/Button'
import UniIcon from '../components/Icon'
import Grid from '@material-ui/core/Grid'

const View = props => {
  return (
  <div>
    <div className="container">
      <h1>Botones</h1>
      <hr/>
        <div className='row justify-center my-2'>
          <div className='col centered text-center my-2'>
            <div className="titulo"> Primarios </div>
            <div className="subtitulo"> Tamaños </div>
          </div>
        </div>

        <div className='row justify-around  text-center my-2'> 
            <div className='centered my-2'>
              <UniButton size="small" content="prueba" />
              <p className="tag3 mt-1"> Pequeño </p>
            </div>           
            
            <div className='centered my-2'>
              <UniButton  size="medium" content="prueba"  />
              <p className="tag3 mt-1"> Mediano </p>
            </div>
            
            <div className='centered my-2'>
              <UniButton size="large" content="prueba" />
              <p className="tag3 mt-1"> Grande </p>
            </div>
        </div> 

        <div className='row justify-around  text-center my-2'> 
            <div className="subtitulo"> Variantes </div>
        </div> 
        <div className='row justify-around  text-center my-2'> 
            <div className='centered my-2'>
              <UniButton variant="text" content="prueba" />
              <p className="tag3 mt-1"> Texto </p>
            </div>           
            
            <div className='centered my-2'>
              <UniButton variant="square" content="prueba"  />
              <p className="tag3 mt-1"> Cuadrado </p>
            </div>            
            
            <div className='centered my-2'>
              <UniButton disabled content="prueba"  />
              <p className="tag3 mt-1"> Deshabilitado </p>
            </div>
            
            <div className='centered my-2'>
              <UniButton loading={true} content="prueba" />
              <p className="tag3 mt-1"> En Espera </p>
            </div>
        </div>

        <hr/>

        <div className='row justify-center my-2'>
          <div className='col centered text-center my-2'>
            <div className="titulo"> Secundarios </div>
            <div className="subtitulo"> Tamaños </div>
          </div>
        </div>

        <div className='row justify-around  text-center my-2'> 
            <div className='centered my-2'>
              <UniButton color="accent" size="small" content="prueba" />
              <p className="tag3 mt-1"> Pequeño </p>
            </div>           
            
            <div className='centered my-2'>
              <UniButton  color="accent" size="medium" content="prueba"  />
              <p className="tag3 mt-1"> Mediano </p>
            </div>
            
            <div className='centered my-2'>
              <UniButton color="accent" size="large" content="prueba" />
              <p className="tag3 mt-1"> Grande </p>
            </div>
        </div>


        <div className='row justify-around  text-center my-2'> 
            <div className="subtitulo"> Variantes </div>
        </div> 
        <div className='row justify-around  text-center my-2'> 
            <div className='centered my-2'>
              <UniButton color="accent" variant="text" content="prueba" />
              <p className="tag3 mt-1"> Texto </p>
            </div>           
            
            <div className='centered my-2'>
              <UniButton color="accent" variant="square" content="prueba"  />
              <p className="tag3 mt-1"> Cuadrado </p>
            </div>            
            
            <div className='centered my-2'>
              <UniButton color="accent" disabled content="prueba"  />
              <p className="tag3 mt-1"> Deshabilitado </p>
            </div>
            
            <div className='centered my-2'>
              <UniButton color="accent" loading={true} content="prueba" />
              <p className="tag3 mt-1"> En Espera </p>
            </div>
        </div>
        <hr/>
        <div className='row justify-around  text-center my-2'> 
            <div className="titulo"> Iconos </div>
        </div>
        <div className='row justify-center  align-center text-center my-2'>
          <div className='centered my-2'>
            <UniButton color="accent" variant="icon" size="small" content="pequeño"  iconName="MonetizationOn" />
          </div>          
          <div className='centered my-2'>
            <UniButton color="accent" variant="icon"  iconName="AccountCircle"  content="Mediano" />
          </div>          
          <div className='centered my-2'>
            <UniButton color="accent" variant="icon" iconSize="large" iconName="AccountBalanceWallet"  content="Grande" />
          </div>
          <div className='centered my-2'>
            <UniButton variant="icon" size="small" content="pequeño"  iconName="MonetizationOn" />
          </div>          
          <div className='centered my-2'>
            <UniButton variant="icon"  iconName="AccountCircle"  content="Mediano" />
          </div>          
          <div className='centered my-2'>
            <UniButton variant="icon" iconSize="large" iconName="AccountBalanceWallet"  content="Grande" />
          </div>
          <div className='row justify-center  align-center text-center my-2'>

          <div className='centered my-2'>
            <UniButton variant="icon" icon={UniIcon}  size="small" content="Pequeño" />
          </div>
          <div className='centered my-2'>
            <UniButton variant="icon" icon={UniIcon} content="Mediano"   />
          </div>                  
          <div className='centered my-2'>
            <UniButton  variant="icon" size="large" icon={UniIcon} content="Grande" />
          </div>
          <div className='centered my-2'>
            <UniButton color='accent' variant="icon" icon={UniIcon}  size="small" content="Pequeño" />
          </div>
          <div className='centered my-2'>
            <UniButton color='accent'  variant="icon" icon={UniIcon} content="Mediano"   />
          </div>                  
          <div className='centered my-2'>
            <UniButton  color='accent' variant="icon" size="large" icon={UniIcon} content="Grande" />
          </div>
          <div className='centered my-2'>
            <UniButton color='original' variant="icon" icon={UniIcon}  size="small" content="Pequeño" />
          </div>
          <div className='centered my-2'>
            <UniButton color='original'  variant="icon" icon={UniIcon} content="Mediano"   />
          </div>                  
          <div className='centered my-2'>
            <UniButton  color='original' variant="icon" size="large" icon={UniIcon} content="Grande" />
          </div>
          </div>
        </div>
        {/* TODO: Configuación adecuada de los Botones Flotantes FAB */}
        {/* <div className='row justify-around  text-center my-2'>  */}
            {/* <div className="titulo"> Flotantes </div> */}
        {/* </div> */}
        {/* <div className='row justify-center  align-center text-center my-2'>
          <div className="mx-2">
            <UniButton  variant="fab"  icon={UniIcon} content="Primario" />
          </div>  
          <div className="mx-2">
            <UniButton  variant="fab"  color='accent' icon={UniIcon} content="Secundario" />
          </div>  
          <div className="mx-2">
            <UniButton  variant="fab"  color='original' icon={UniIcon} content="Original" />
          </div>  

        </div> */}
    </div>
  </div>
  )
}

export default View