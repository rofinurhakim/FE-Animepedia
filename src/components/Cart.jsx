import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { Link, useParams } from "react-router-dom"
import "../style/Cart.css"
import client from '../service/axios';
import Nav from './Nav';
import { fieldError } from '../utils/errorField';
import Footer from './Footer';

const Cart = () => {
<<<<<<< HEAD
    const { products, totalQuantities, totalPrice, user } = useSelector(state => state.CartReducer);
    
    const dispatch = useDispatch();
    const imageUrl = "http://localhost:5000/";

    const addChekout = async () => {
        client.post(`/api/v1/transaction`, {
            user_id: user.id,
            product_id: products[0].id,
            qty: products[0].quantity,
            price: products[0].price,
            totalPrice: totalPrice,
            status: 1,

        }).then((res)=> {
           alert("data berhasil di checkout")
           dispatch({type: 'REMOVE', payload: products[0].id})
        console.log(res)
        }).catch((err) => {
            fieldError(err.res.message)
        })
    }
      
=======
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    const imageUrl = "http://localhost:5100/";

>>>>>>> 0e225e750393d4f8d580742e0b1f39ae11106b35
    return (
        <div>
            <Nav />
        <div className="cart">
            <div className="container-cart">
                <Link to="/products" className="back"> &#8592; back </Link>
                {products.length > 0 ? <div>
                    <div className="row-cart">
                    <div className="col-cart">
                    <div className="cart-heading">
                        <div className="row-cart">
                            <div className="col-name">Picture</div>
                            <div className="col-name">Nama Produk</div>
                            <div className="col-name">Harga</div>
                            <div className="col-name">Inc/Dec</div>
                            <div className="col-name">Total Harga</div>
                            <div className="col-name">Hapus Produk</div>
                        </div>
                    </div>
                    
                    {products.map(item => (
                        <div className="verticalAlign" key={item.id}>
                            <div className="cart-image">
                                <img
                                    src={`${imageUrl}${
                                        item.image
                                        ? item.image
                                        : "uploads/no-image.png"
                                    }`}
                                    alt="image_name"
                                    className="img-url"
                                />
                            </div>      
                            <div className="cart-name">
                                <p>{item.nama_produk}</p>
                            </div>           
                            <div className="cart-price">
                                <p>{currencyFormatter.format(item.price, {code: 'IDR'})}</p>
                            </div>    
                            <div className="cart-incDec">                            
                                <span className="dec" onClick={() => dispatch({type: 'DEC', payload: item.id})}><BsDash /></span>
                                <span className="quantity">{item.quantity}</span>
                                <span className="inc" onClick={() => dispatch({type: 'INC', payload: item.id})}><BsPlus/></span>
                            </div>                          
                            <div className="cart-total">
                                <p>{currencyFormatter.format(item.price * item.quantity, {code: 'IDR'})}</p>
                            </div>
                            <div className="cart-remove">
                                <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: item.id})}>
                                    <p>menghapus</p>
                                </div>
                            </div>
                        </div>
                    ))}
                 
                    </div>
                    <div className="summary-col">
                        <div className="summary">
                            <div className="summary-heading">
                                Jumlah 
                            </div>
                            <div className="summary-details">
                                <div className="total-item">
                                    <p> Total Pembelian : </p>
                                    {totalQuantities}
                                </div>
                                <div className="total-price">                                   
                                  <p> Total Harga :</p>                          
                                    {currencyFormatter.format(totalPrice, {code: 'IDR'})}
                                </div>
                                    <p className="font">Metode Pembayaran : </p>
                                <div className="metode">
                                    <img src={`/images/bca2.png`} />
                                    <p>NO Rek : 256781929 </p>
                                    <p>Nama: Husnul Chuluk</p>
                                </div>
                                <button type="button" className="checkout" onClick={addChekout}> Checkout </button>
                            </div>
                        </div>
                    </div>
                </div> 
                </div> : 'Keranjang Anda Kosong silakan Kembali!'}
            </div>
        </div>
       
        </div>
    )
}

export default Cart