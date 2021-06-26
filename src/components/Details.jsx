import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
// import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { Link } from "react-router-dom"
import "../style/Details.css"
import client from '../service/axios';

const Details = () => {
  
    const imageUrl = "http://localhost:5100/";
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [ cart, setCart ] = useState([])

    const [ products, setProducts ] = useState([])
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
      <div className="small-container">
        <div className="single-product">
          <div className="row">  
            <div className="col-2">
              <Link to="/products" className="back"> &#8592; back </Link>
                <img
                  src={`${imageUrl}${
                    products.image
                      ? products.image
                      : "uploads/no-image.png"
                  }`}
                  alt="image_name"
                  className="img-url"
                />   
            </div>    
            <div className="col-2"> 
                <h1 className="name">{products.nama_produk}</h1>
                <div className="deskripsi">    
                  <h4 className="actualPrice">Rp.{" "}
                    {new Number(products.price).toLocaleString("id-ID")}
                  </h4> 
                  <select>
                  <option>Select-size</option>
                      <option>XXL</option>
                      <option>XL</option>
                      <option>L</option>
                      <option>M</option>
                      <option>S</option>
                  </select>
                  <div className="plus-minus">
                      <span className="dec" onClick={decQuantity}><BsDash /></span>
                      <span className="quantity">{quantity}</span>
                      <span className="inc" onClick={() => setQuantity(quantity+1)}><BsPlus/></span>
                  </div>
                  <div className="btn-keranjang">
                   
                      <button className="btn-default" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {products, quantity} })}>Masukan Keranjang </button>
                  </div>
                  <div className="details">
                    <h3> Deskripsi Produk <i className="fa fa-indent"></i></h3>
                    <p>{products.deskripsi}</p>
                  </div>
                </div> 
              </div> 
          </div> 
        </div>
      </div>
    </div>
  ) 
}

export default Details
