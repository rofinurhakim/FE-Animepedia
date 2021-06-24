import React from 'react'
import Header from "./Header"
import Footer from './Footer';
import "./../style/Home.css"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="categories">
                <div className="small-container">
                    <h2> Produk Unggulan </h2>
                    <div className="row">
                        <div className="col-3">
                            <img src={`images/category-1.jpg`} />
                        </div>
                        <div className="col-3">
                            <img src={`images/category-2.jpg`} />
                        </div>
                        <div className="col-3">
                            <img src={`images/category-3.jpg`} />
                        </div>
                    </div>
                </div>               
            </div>
            
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src={`images/exclusive.png`} className="offer-img" />
                        </div>
                        <div className="col-2">
                            <p>Tersedia Secara Exkslusif Di RedStore</p>
                            <h1>Barang Terlaris Ke 4</h1>
                            <small> Jam Mi Terlaris K 4 Merek Mantul Terlaris</small>
                            <a href="" className="btn"> Beli Sekarang &#8594; </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Kucing disebut juga kucing domestik atau kucing rumah adalah sejenis mamalia karnivora dari keluarga Felidae. Kata "kucing" biasanya merujuk kepada "kucing" yang telah dijinakkan, tetapi bisa juga merujuk kepada 
                            "kucing besar" seperti singa dan harimau.</p>
                            <div className="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src={`images/exclusive.png`} />
                            <h3>Bismillah</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Kucing disebut juga kucing domestik atau kucing rumah adalah sejenis mamalia karnivora dari keluarga Felidae. Kata "kucing" biasanya merujuk kepada "kucing" yang telah dijinakkan, tetapi bisa juga merujuk kepada 
                            "kucing besar" seperti singa dan harimau.</p>
                            <div className="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src={`images/exclusive.png`} />
                            <h3>Bismillah</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Kucing disebut juga kucing domestik atau kucing rumah adalah sejenis mamalia karnivora dari keluarga Felidae. Kata "kucing" biasanya merujuk kepada "kucing" yang telah dijinakkan, tetapi bisa juga merujuk kepada 
                            "kucing besar" seperti singa dan harimau.</p>
                            <div className="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src={`images/exclusive.png`} />
                            <h3>Bismillah</h3>
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
