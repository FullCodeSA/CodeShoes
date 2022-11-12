import React, { Fragment } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Search } from './Search'
import { logout } from '../../actions/userActions'

const Header = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)
  
  const logoutHandler = () =>{
    dispatch(logout());
    alert.success("Logiyt exitoso")
  }
  return (
    <Fragment>
      <nav class="navbar">
        <Link to="/"><img src="./img/CodeShoesH.png" class="brand-logo" alt="logo code shoes"></img></Link>
        <ul class="nav-links">
          <li class="nav-items"><a href="http://localhoost:3000">HOMBRE</a></li>
          <li class="nav-items"><a href="http://localhoost:3000">MUJER</a></li>
        </ul>
        <div class="right-container">
          <Search></Search>
        </div>

        <div class="right-container">

          {/* BOTON INICIO DE SESION */}
          <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
            <span className="ml-1" id="cart_count">2</span></Link>

          {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                                id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <figure className='avatar avatar-nav'>
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.nombre}
                                        className="rounded-circle"></img>
                                </figure>
                                <span>{user && user.nombre}</span>
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                {/*Preguntamos el rol de quien esta online*/}
                                {user && user.role === "admin" && (
                                    <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                                )}

                                <Link className="dropdown-item" to="/">Pedidos</Link>
                                <Link className="dropdown-item" to="/yo">Mi Perfil</Link>
                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesión</Link>
                               
                            </div>
                        </div>
          
            ): !loading &&  <Link to="/login"><button class="sub-btn">Login</button></Link>}

      </div>
    </nav>
    </Fragment >

  )
}

export default Header