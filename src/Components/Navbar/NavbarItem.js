import React from 'react'

export const NavbarItem = (props) => {
    /* let seccion=(document.querySelector('.nav-item')) */

  return (
 
    // Trato de hacer que cada item tenga un evento click pero dice que no puede leer una propieda null para el evento
    /*        seccion.addEventListener('click',()=>{
            console.log('diste click')
        }), */

    <li className="nav-item">
        <p className="nav-link active barra-items" aria-current="page" href="#">
            {props.texto}
            {}
        </p>
    </li>
  );
}
