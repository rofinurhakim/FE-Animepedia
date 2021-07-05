import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import Nav from "./Nav"
import Footer from './Footer';
import {BsDash, BsPlus} from "react-icons/bs";
import { Link } from "react-router-dom"
import "../style/Details.css"
import client from '../service/axios';
import swal from 'sweetalert';
import  ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const Details = () => {
  
    const imageUrl = "http://localhost:3000/";
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const productCart = useSelector(state => state.CartReducer.products);
    const [loading, setLoading] = useState(false)

    const [ products, setProducts ] = useState([])
    const {id} = useParams();
    
    const addCart = () => {
      const addedProduct = productCart.filter(item => item.id === products.id)[0];

      if (addedProduct) {
        addedProduct.quantity = addedProduct.quantity + quantity;
      } else {
        products.quantity = quantity
      }

      dispatch({
        type: 'ADD_TO_CART', 
        payload: {
          products: addedProduct ? addedProduct : products,
          quantity  
        } 
      })

      swal("Berhasil!", "Add To Cart!", "success");

     

    }

    
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

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000)
    }, [])

  return (
    <div>
      <Nav />
     <div className="loadingDus">
          {loading ? (

          <ClimbingBoxLoader size= {30} color={"#000000"}  loading={loading} 

          />

          ) : (
          
      <div className="small-container">
        <div className="single-product">
          <div className="row">  
            <div className="col-2">
              <Link to="/products" className="back"> Go back </Link>
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
                <h1 className="name">{products.nama_products}</h1>
                <div className="deskripsi">    
                <p>{products.deskripsi}</p>
                  <h4 className="actualPrice">Rp.{" "}
                    {new Number(products.price).toLocaleString("id-ID")}
                  </h4> 
                 
                 
                  <div className="plus-minus">
                      <span className="dec" onClick={decQuantity}><BsDash /></span>
                      <span className="quantity">{quantity}</span>
                      <span className="inc" onClick={() => setQuantity(quantity+1)}><BsPlus/></span>
                  </div>


                  <div className="btn-keranjang">
                   

                      <button className="btn-default" onClick={() => addCart()}> Add To Cart </button>
                  </div>
                  <div className="details">
                  
                 
                  </div>
                </div> 
              </div> 
          </div> 
        </div>
      </div>
          )}
      </div>
  
    </div>
  ) 
}

export default Details