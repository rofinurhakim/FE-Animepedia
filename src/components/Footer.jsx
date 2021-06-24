import React from 'react'
import "./../style/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Aplikasi Kita</h3>
                        <p>Download di Android dan Ios Seluler Anda</p>
                        <div className="app-logo">
                            <img src={`images/play-store.png`}  />
                            <img src={`images/app-store.png`} />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={`images/logo.png`}  />
                        <p>Tujuan Kami mempermudah anda untuk mencari keuntungan</p>
                    </div>
                    <div className="footer-col-3">
                        <p>Alamat berguna</p>
                        <ul>
                            <li>Kupon</li>
                            <li>Blog Post</li>
                            <li>Kebijakan Pengembalian</li>
                            <li>Bergabunglah dengan kita</li>
                        </ul>
                    </div>
                    <div className="footer-col-3">
                        <p>Ikuti</p>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright"> Belajar Coding </p>
            </div>
        </div>
    )
}

export default Footer