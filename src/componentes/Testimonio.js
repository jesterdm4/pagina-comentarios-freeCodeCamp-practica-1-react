import React from 'react'
import '../hojas-de-estilo/Testimonio.css'
 
//de esta manera se crea un componente utilizando props, osea crear un componente totalmente reutilizable

const Testimonio = (props)=>{
 
    return (
           <div className="contenedor-testimonio">
               <img 
                  className="imagen-testimonio" 
                  src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} 
                  alt="foto de emma"
               />
                    <div className="contenedor-texto-testimonio" id="texto-testimonio">
                        <p className="nombre-testimonio">
                            <strong>{props.nombre}</strong>
                        </p>
                        <p className="cargo-testimonio">
                            {props.clase} de <b>{props.setting}</b>
                        </p>
                        <p className="texto-testimonio">
                            {props.descripcion}
                        </p>
                    </div>   
           </div>
       );
   
    }

export default Testimonio;

//esto es un ejemplo de un componente sin props, osea un componente basico no reutilizable 

/*

const Testimonio = ()=>{
 
 return (
        <div className="contenedor-testimonio">
            <img 
            className="imagen-testimonio" 
            src={require("../imagenes/testimonio-emma.jpg")} 
            alt="foto de emma"/>

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    Emma Bostian
                </p>
                <p className="cargo-testimonio">
                    artificier@ de Forgoten Realms
                </p>
                <p className="texto-testimonio">
                    nacio mujer pero luego se convirtio en una persona muy buena, gracias a poder verse como el viejo que siempre quiso ser
                </p>
            </div>

        </div>
    );

 }

*/
 
