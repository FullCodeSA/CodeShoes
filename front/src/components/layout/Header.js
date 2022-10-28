import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
         <nav class="navbar">
    <img src="./img/CodeShoesH.png" class="brand-logo" alt=""></img>
    <ul class="nav-links">
        <li class="nav-items"><a href="http://localhoost:3000">!!!!</a></li>
        <li class="nav-items"><a href="http://localhoost:3000">$$$</a></li>
        <li class="nav-items"><a href="http://localhoost:3000">%%%%</a></li>
        <li class="nav-items"><a href="http://localhoost:3000">????</a></li>
    </ul>

    <div class="right-container">
        <input type="text" class="search-box" placeholder="search"></input>
        <button class="sub-btn">Registrese</button>
        <a href="http://localhoost:3000" class="login-link">Inicio Sesión</a>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
        <span class="nav-items"  id="cart_count">2</span>
    </div>
</nav>


    </Fragment>
    
  )
}

export default Header