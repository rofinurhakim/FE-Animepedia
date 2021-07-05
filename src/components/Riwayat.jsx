import client from '../service/axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {useSelector} from "react-redux";
import Nav from './Nav'


const Purchace = () => {
  
    let [transaction, setTransaction] = useState([]);
    const {id} = useParams()
 
  
    useEffect(() => {
      const getList = () => {
        client
          .get(`/api/v1/transaction`, {
           
          })
          .then((res) => {
            setTransaction(res.data.transaction);
           
          })
          .catch((err) => {});
      };
  
      getList();
    }, []);
  
  



    return (
        <div>
            <Nav />
            <div className="cart">
            <div className="container-cart">
                  <div className="row-cart">
                  <div className="col-cart">
                  <div className="cart-heading">
                      <div className="row-cart">
                          <div className="col-name">No. Transaksi</div>
                          <div className="col-name">Waktu Transaksi</div>
                          <div className="col-name">Status</div>
                          
                        </div>
                    </div>
                    {
                      transaction.map((item, index) => {
                        return (
                          <div className="row-cart" key={index}>
                            <div className="col-name">{item.transaction_id}</div>
                            <div className="col-name">{item.createdAt}</div>
                            <div className="col-name">{item.status}</div>
                            <div className="col-name">
                            </div>
                          </div>
                        )
                      })
                    }
                    </div>
                    </div> 
                </div> 
            </div>
        </div>
     
    )
   
}


 


export default Purchace
