import React from 'react'

const NavBar = ({user}) => {


    return (
        <nav className="nav">
        <div className="companyheader">
        <a className="logo" href="/"> The Everyday Lady </a>
        </div>
        <div className="companylinks">
        <ul className="nav-links">
        <a href="/about"> <li>About</li></a>
        <a href="/home"><li> Home</li> </a>
        <a href="/lifestyle"><li> Lifestyle</li></a>
        <a href="/clothing"><li> Clothing</li></a>
        </ul>
        </div>
        <div className="searchbarandcart">
        <form className="searchbar" >
      <input
        type="text"
        id="search"
        className="input"
        
        placeholder="Search ..."
      />
    
    </form>
        <a className="cta" href="/cart"><p>  </p> <img src="https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png"alt="cart" className="cartlogo"/></a> 
       {user ? <h4>Hey {user.name}</h4> : <a href='/signin'>Signin</a>} 
        </div>
      </nav>
    )
}

export default NavBar;