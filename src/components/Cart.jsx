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
    const {totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    const imageUrl = "http://localhost:5000/";
    const [quantity, setQuantity] = useState(1);

    const [ product, setProducts ] = useState([])
    const {id} = useParams();
    
    const getList = () => {
        client
          .get(`/api/v1/products/${id}`,{
          })
          .then((res) => {
            console.log(res);
            setProducts(res.data.products);
          })
          .catch((err) => {});
      };
    
      useEffect(() => {
        const getList = () => {
          client
            .get(`/api/v1/products/${id}`, {
            })
            .then((res) => {
              setProducts(res.data.product);
            })
            .catch((err) => {});
        };
    
        getList();
      }, [id]);

    const decQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div>
        <div className="cart">
            <div className="container-cart">
                <Link to="/products" className="back"> &#8592; back </Link>
                {product.length > 0 ? <div>
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
                    
                    <div className="verticalAlign" key={product.id}>
                        <div className="cart-image">
                            <img
                                src={`${imageUrl}${
                                    product.image
                                    ? product.image
                                    : "uploads/no-image.png"
                                }`}
                                alt="image_name"
                                className="img-url"
                            />
                        </div>      
                        <div className="cart-name">
                            <p>{product.nama_produk}</p>
                        </div>           
                        <div className="cart-price">
                            <p>{currencyFormatter.format(product.price, {code: 'IDR'})}</p>
                        </div>    
                        <div className="cart-incDec">                            
                            <span className="dec" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
                            <span className="quantity">{product.quantity}</span>
                            <span className="inc" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
                        </div>                          
                        <div className="cart-total">
                            <p>{currencyFormatter.format(product.price * product.quantity, {code: 'IDR'})}</p>
                        </div>
                        <div className="cart-remove">
                             <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                                 <p>menghapus</p>
                             </div>
                        </div>
                    </div>
                 
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
