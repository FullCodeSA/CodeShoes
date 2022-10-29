import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div class="wrapper">
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>PANEL DE CONTROL</h3>
            </div>

            <ul class="list-unstyled components">
            <li>
                            <Link to="/Dashboard">Administración</Link>
                        </li>
                <li class="active">
                    <a  href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Productos</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/ProductList">Lista productos</Link>
                        </li>
                        <li>
                            <Link to="#">Crear Producto</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#">Pedidos</Link>
                </li>
                
                <li>
                    <Link to="#">Usuarios</Link>
                </li>
                <li>
                    <Link to="#">Reviews</Link>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <Link to="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Cerrar Sesión</Link>
                </li>
            </ul>
        </nav>

        <div id="content">

    
        </div>
    </div>
    )
}

export default Sidebar