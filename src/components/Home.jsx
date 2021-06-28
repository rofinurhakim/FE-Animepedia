import React from 'react'
import Header from "./Header"
import Footer from './Footer';
import "./../style/Home.css"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import client from '../service/axios';

const Home = () => {
  const imageUrl = "http://localhost:5000/";
  const [ products, setProducts ] = useState([])
  const [pageCount, setPageCount] = useState();
  const [ limit, setLimit ] = useState(10)
  const [ page, setPage ] = useState(1)
  
  const getList = () => {
    client
      .get("/api/v1/products", {
          limit
      })
  };

  useEffect(() => {
    const getList = () => {
      client
        .get("/api/v1/products", {
        })
        .then((res) => {
          setProducts((prevState) => res.data.products);
        })
        .catch((err) => {});
    }

    getList();
  }, [limit, page, pageCount]);

    return (
       <div>
           
            <Header />
            <div className="categories">
                <div className="small-container">
                <h2 class="title">Produk Unggulan</h2>
                    <div className="row">
                        <div className="col-3">
                        <Link to={`products/details/${`1b5fcc99-7431-4738-9d6a-3f72c323585f`}`}>
                        <img
                            src={`${imageUrl}${
                                products.image
                                ? products.image
                                : "uploads/1624629342561.jpg"
                            }`}
                            alt="image_name"
                            className="img-url"
                            />
                        </Link>
                        </div>
                        <div className="col-3">
                        <Link to={`products/details/${`43c852ef-be9f-4098-b0c2-c1c45cd112bd`}`}>
                        <img
                            src={`${imageUrl}${
                                products.image
                                ? products.image
                                : "uploads/1624629441328.jpg"
                            }`}
                            alt="image_name"
                            className="img-url"
                            />
                        </Link>
                        </div>
                        <div className="col-3">
                        <Link to={`products/details/${`a858ad71-0a8f-46fc-a454-a1c100d3a061`}`}>
                        <img
                            src={`${imageUrl}${
                                products.image
                                ? products.image
                                : "uploads/1624629544048.jpg"
                            }`}
                            alt="image_name"
                            className="img-url"
                            />
                        </Link>
                        </div>
                    </div>
                </div>               
            </div>           
            <div className="small-container">
                <h2 class="title">Produk </h2>
                <div className="row" >
                    {products.map((product, index) => {
                    return(
                    <div className="col-4" key={index}>
                        <div className="col-4">
                        <Link to={`products/details/${product.id}`}>
                        <img
                            src={`${imageUrl}${
                                product.image
                                ? product.image
                                : "uploads/no-image.png"
                            }`}
                            alt="image_name"
                            className="img-url"
                            />
                        </Link>
                        <h3>{product.nama_produk}</h3>
                        <div class="rating"> 
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                        </div>
                        <h4>Rp.{" "}
                            {new Number(product.price).toLocaleString("id-ID")}
                        </h4>   
                    </div>
                    </div>
                    )
                })}
                </div>
            </div>
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">               
                            <img
                            src={`${imageUrl}${
                                products.image
                                ? products.image
                                : "uploads/1624670312781.jpg"
                            }`}
                            alt="image_name"
                            className="img-url"
                            />
                        </div>
                        <div className="col-2">
                            <div className="text">
                                <p>Tersedia Secara Exkslusif Di RedStore</p>
                                <h1>Jas dan Celana Pria </h1>
                                <small>  jas formal/jas kantor/jas pengantin/jas casual/jas wisuda </small>
                                <Link to={`products/details/${`7aa8e819-dbde-4378-91d3-37fe78c6cc4e`}`} className="btn"> Beli Sekarang &#8594; </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="small-container">
                    <h1 class="title">Apa Kata mereka ? </h1>
                    <div className="row">
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Bagus, reccomended, bahan sesuai dengan harga, sablon sesuai juga dengan harga, 
                                tapi ukuran itu lo ngk sesuai, masa ukuran M sama L sama besarnya, 
                                jadi ngak muat deh pdhl utk coupel juga, udah beli kaosnya yng sma eh sweternya ngk muat, 
                                tapi kaosnya ngk masalah</p>
                            <div className="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <img src={`images/exclusive.png`} />
                            <h3>Rofi</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Suka banget 😍😍😍😍😍
                                Makasih banyak ya kk,jas nya keren banget kk,
                                Makasih banyak jg ya kk dah sabar bls SMS aku.
                                Pokoknya goddddd,, murah Rezky ya kk, semoga Tuhan Yesus memberkati usaha kk n keluarga kecil kk 🙏🙏😇😇
                                Toko terbaik ku😍😍😍</p>
                            <div className="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src={`images/exclusive.png`} />
                            <h3>Husnul</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Jujur!
                                Bahannya bagus banget, berasa harga diatas 100k
                                Jahitan rapi, kain tebal tapi ga gerah
                                Cocok dipake kuliah, kerja, atau acara formal lainnya
                                Next, pengen beli warna abu nya hehehehe
                                Makasih seller 💙</p>
                            <div className="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src={`images/exclusive.png`} />
                            <h3>Ricky</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src={`images/logo-godrej.png`}  />
                        </div>
                        <div className="col-5">
                            <img src={`images/logo-oppo.png`}  />
                        </div>
                        <div className="col-5">
                            <img src={`images/logo-paypal.png`}  />
                        </div>
                        <div className="col-5">
                            <img src={`images/logo-coca-cola.png`}  />
                        </div>
                        <div className="col-5">
                            <img src={`images/logo-philips.png`}  />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
