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
                    <a  href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i>Productos</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/ProductList"><i className="fa fa-clipboard"></i> Todos</Link>
                        </li>
                        <li>
                            <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Crear Producto</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                </li>
                
                <li>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Usuarios</Link>
                </li>
                <li>
                <Link to="/admin/reviews"><i className="fa fa-star"></i>Reviews</Link>
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