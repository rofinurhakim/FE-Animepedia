import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { Link, useParams } from "react-router-dom"
import "../style/Cart.css"
import client from '../service/axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Nav from './Nav';

const Cart = () => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    const imageUrl = "http://localhost:5100/";

    return (
        <div>
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
                                <button type="button" className="checkout">Checkout</button>
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
