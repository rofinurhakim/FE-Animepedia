import React from 'react'
import Header from "./Header"
import Footer from './Footer';
import "./../style/Home.css"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import client from '../service/axios';

const Home = () => {
  

    return (
       <div>
           
            <Header />
       
        </div>
    )
}

export default Home
