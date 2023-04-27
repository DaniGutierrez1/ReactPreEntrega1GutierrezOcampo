import React from 'react'
import { NavbarItem } from './NavbarItem'
import CartWidget from './CartWidget'
import './Navbar.css'

const Navbar = (props) => {
    
    const items = ['Componentes', 'Perifericos', 'Sillas', 'Pcs armadas']
    
    return (
        <nav className="navbar navbar-expand-lg  bg-light">
            <div className="container-fluid barra">
                <p className="navbar-brand barra-logo">TechGames</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {items.map((texto,index)=>(
                        <NavbarItem key={index} texto ={texto} />
                        

                    ) )}
                    
                    
                
                </ul>
                </div>

                <CartWidget key={1}/>


            </div>
        </nav>
    )
}

export default Navbar