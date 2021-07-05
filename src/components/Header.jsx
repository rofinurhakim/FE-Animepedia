import React from 'react'
import "./../style/Header.css"
import { Link } from "react-router-dom" 
import { NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useState,useEffect } from 'react'
import { LogoutData } from "../service/auth";
import {FaUserAstronaut} from 'react-icons/fa'





const Header = () => {
const history = useHistory()

const [user, setUser] = useState(null)
      
    useEffect(() => {
        // Update the document title using the browser API
          const dataUser = JSON.parse(localStorage.getItem('user'))
          console.log(dataUser)
          setUser(dataUser)
      }, []);

      const onLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        LogoutData(routeLogout)
        routeLogout()
      } 
    
      const routeLogout = () => {
        history.push('/login')
        history.go()
      }

  
    return (
     
         
        <div className='container1'>
        <div className='title2'>
            <div className='header1'>
                <h1>Welcome To <b>Anime World</b></h1>
                <h1>Buy Now <b>The Item</b></h1>
            </div>
            <div className='sub-header'>
            <FaUserAstronaut></FaUserAstronaut> 
            <NavDropdown  title= {  user ? user.nama_lengkap : ""} id="basic-nav-dropdown"  >
               
        <NavDropdown.Item  onClick={onLogout}> LogOut   </NavDropdown.Item>
      </NavDropdown> 
                </div>               
            
        </div>
        {/* CONTENT SECTION */}
        <div className='mainpage-content'>
            <div className='shopnow-butt'>
                <button onClick={() => history.push ('/products')}>Shop Now</button>
            </div>
            <div className='content-right'>
                
            </div>
            
        </div>
        
    </div>

  
    )
}

export default Header
