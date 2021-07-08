import client from '../service/axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {useSelector} from "react-redux";
import '../style/riwayat.css'
import Nav from './Nav'


const Purchace = () => {
  const { user } = useSelector(state => state.CartReducer);
    let [transaction, setTransaction] = useState([]);
    const {id} = useParams()
 
  
    useEffect(() => {
      const getList = () => {
        client
          .get(`/api/v1/transaction`, {
           
          })
          .then((res) => {
            if (res.data.transaction && res.data.transaction.length > 0 ) {
              let dataTemp = []
              res.data.transaction.forEach(el => {
                if(el.user_id === user.id) {
                  dataTemp.push(el)
                }
              })
              setTransaction(dataTemp)
            }
         
           
          })
          .catch((err) => {});
      };
  
      getList();
    }, []);
  
  



    return (
        <div>
            <Nav />
            <div className="cart">
            <div className="container-purchace">
                  <div className="row-cart">
                  <div className="col-cart">
                  <div className="cart-heading">
                      <div className="row-cart">
                          <div className="col-name">No. Transaction</div>
                          <div className="col-name">Waktu. Transactions</div>
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
