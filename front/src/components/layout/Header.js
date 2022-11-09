import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

const Header = () => {
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
          <div className="ml-4 dropdown d-inline">
            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
              id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span>Panel de Control</span></Link>
            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
              <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
              <Link className="dropdown-item" to="/">Pedidos</Link>
              <Link className="dropdown-item" to="/">Mi cuenta</Link>
            </div>
          </div>
          <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
            <span className="ml-1" id="cart_count">2</span></Link>
        </div>
      </nav>
    </Fragment>

  )
}

export default Header