import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./../style/Nav.css"
import UsersIcon from './Users';
import { CartFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';


const Nav = () => {
    const history = useHistory()
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h1>ANIMEPEDIA</h1>
                    </div>
                    <nav className="menu">
                        <ul id="MenuItems">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Product</Link></li>
                            <li><Link to="/products/riwayat" className="pesan">  Purchace History </Link></li>
                        </ul>
                    </nav>
                    <div className="img_cart">
                       <button  style={{cursor: "pointer"}} onClick={() => history.push ('/cart')} > <CartFill></CartFill> </button>
                        <p>{totalQuantities}</p>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export default Nav
