import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./../style/Nav.css"
import UserDropdown from './Users';

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/"><img src={`/images/logo.png`} alt="logo"/></Link>
                    </div>
                    <nav className="menu">
                        <ul id="MenuItems">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Product</Link></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Account</a> </li>
                            <li><Link to="/pesanan" className="pesan">  Pesanan Saya </Link></li>
                        </ul>
                    </nav>
                    <div className="img_cart">
                        <Link to="/cart">
                            <img src={`/images/cart.png`} />
                        </Link>
                        <p>{totalQuantities}</p>
                    </div>
                </div>
            </div>
            <UserDropdown />    
        </div>
    )
}

export default Nav
