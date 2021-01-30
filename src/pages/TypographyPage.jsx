import React from 'react';


const View = props => {
  return (
    <div className="container">
      <h1>Texto</h1>
      <hr/>
      <div className="row justify-start my-2">
        <div className="col">     
          <h1 className="titulo"> Titulo 1 </h1>
          <h1 className="subtitulo"> Subtitulo 1 </h1>
  
          <h2 className="titulo"> Titulo 2 </h2>
          <h2 className="subtitulo"> Subtitulo 2 </h2>
          
          <h3 className="titulo"> Titulo 3 </h3>
          <h3 className="subtitulo"> Subtitulo 3 </h3>
          
          <h4 className="titulo"> Titulo 4 </h4>
          <h4 className="subtitulo"> Subtitulo 4 </h4>
          
          <h5 className="titulo"> Titulo 5 </h5>
          <h5 className="subtitulo"> Subtitulo 5 </h5>
           <div className="tag1 my-3 mt-5">
             etiqueta 1
           </div>           
           <div className="tag2 my-3">
             etiqueta 2
           </div>           
           <div className="tag3 my-3">
             etiqueta 3
           </div>           
           <div className="tag4 my-3">
             etiqueta 4
           </div>
        </div>
        <div className="col">
          <div className="tag1 mb-n1"> Parrafo </div>    
           <div className="parrafo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nam facilis officiis aut exercitationem mollitia cumque repellendus commodi accusamus, 
              <strong>
              voluptate quos similique sapiente animi minus, 
              </strong>
              odio nesciunt assumenda. Possimus, aliquid.
            </p>
           </div>
          <div className="tag1 mb-n2 mt-4"> Sección </div>    
           <div className="seccion mt-2">
             Lorem ipsum dolor sit amet, doloribus? Eveniet beatae doloremque similique optio. Labore nemo
           </div>

          <div className="tag1 mb-n2 mt-4"> Enfasis</div>    
           <div className="enfasis mt-2">
             Lorem ipsum dolor sit amet, doloribus? Eveniet beatae doloremque similique optio. Labore nemo
           </div>  

           <div className="tag1 mt-4"> Cita</div>    
           <div className="quote mb-3">
             Lorem ipsum dolor sit amet, doloribus? Eveniet beatae doloremque similique optio. Labore nemo
           </div>           
         

        </div>
      </div>
      
    </div>

  )
}

export default View