import React from 'react'
 
 
const Testimonio = ()=>{
 
 return (
        <div className="contenedor-testimonio">
            <img 
            className="imagen-testimonio" 
            src={require("../imagenes/testimonio-emma.jpg")} 
            alt="foto de emma"/>

            <div className="contenedor-texto-testimonio">
                <p className="texto-testimonio">
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
 
export default Testimonio;