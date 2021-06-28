import React, { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import { LogoutData } from "../service/auth";

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
        
          <i class="fa fa-user" aria-hidden="true"></i>
            <a className="nama"
        >
          {user ? user.nama_lengkap : ""}
        </a>
            <a
            href=""
            className="out"
            onClick={() => onLogout()}
          >
           <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
          </a>
        
        </div>
    );
  }


export default UserDropdown;