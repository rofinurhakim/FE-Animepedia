import React from 'react'
import "./../style/Header.css"
import { Link } from "react-router-dom" 
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <h1>Berikan Latihan <br/> Gaya Baru Anda!</h1>
                            <p>sukses tidak selalu tentang kebesaran. itu tentang konsistensi. 
                            <br/> kerja keras yang konsisten mendapatkan kesuksesan. kebesaran akan datang</p>
                            <Link to="/products" className="btn"> Shop All &#8594; </Link>
                        </div>
                        <div className="col-2">
                            <img src= {`images/image1.png`} />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Header
