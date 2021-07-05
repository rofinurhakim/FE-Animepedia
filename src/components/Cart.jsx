import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus, BsTrashFill} from "react-icons/bs";
import { Link, useParams } from "react-router-dom"
import "../style/Cart.css"
import client from '../service/axios';
import Nav from './Nav';
// import { fieldError } from '../utils/errorField';
import Footer from './Footer';
import swal from 'sweetalert';


const Cart = () => {
    const { products, totalQuantities, totalPrice, user } = useSelector(state => state.CartReducer);
    
    const dispatch = useDispatch();
    const imageUrl = "http://localhost:3000/";

    const addChekout = async () => {
        client.post(`/api/v1/transaction`, {
            user_id: user.id,
            products: products,
            totalPrice: totalPrice,
            status: 1,

        }).then((res)=> {
            swal("Success!", "Check Out!", "success");
           dispatch({type: 'REMOVE',payload: [products]})
           
     console.log(res)
        }).catch((err) => {
            window.location.reload();
        })
    }
      
    return (
        <div>
          
        <div className="cart">
            <div className="container-cart">
                <Link to="/products" className="back"> Go Back </Link>
                {products.length > 0 ? <div className="NoCart">
                    <div className="row-cart">
                    <div className="col-cart">
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
                                <h5>{item.nama_products}</h5>
                            </div>           
                            <div className="cart-price">
                                <h6>{currencyFormatter.format(item.price, {code: 'IDR'})}</h6>
                            </div>    
                            <div className="cart-incDec">                            
                                <span className="dec" onClick={() => dispatch({type: 'DEC', payload: item.id})}><BsDash /></span>
                                <span className="quantity">{item.quantity}</span>
                                <span className="inc" onClick={() => dispatch({type: 'INC', payload: item.id})}><BsPlus/></span>
                            </div>                          
                            <div className="cart-total">
                                <h6>{currencyFormatter.format(item.price * item.quantity, {code: 'IDR'})}</h6>
                            </div>
                            <div className="cart-remove">
                                <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: item.id})}>
                                    <BsTrashFill></BsTrashFill>
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
                                  
                                <button type="button" className="checkout" onClick={addChekout}> Checkout </button>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
                :"" }
            </div>
        </div>
       
        </div>
    )
}

export default Cart