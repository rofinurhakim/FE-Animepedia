import React, { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import { LogoutData } from "../service/auth";
import { NavDropdown } from "react-bootstrap";
import { FaUserAstronaut } from "react-icons/fa";

const UserDropdown = () => {
  
  const history = useHistory()
  const [user, setUser] = useState(null)
  
  useEffect(() => {
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
      
      <div className="user">
          <FaUserAstronaut></FaUserAstronaut> 
            <NavDropdown   title= {  user ? user.nama_lengkap : ""} id="basic-nav-dropdown"  >
               
        <NavDropdown.Item  onClick={onLogout}> LogOut   </NavDropdown.Item>
      </NavDropdown> 
        
        </div>
    );
  }


export default UserDropdown;