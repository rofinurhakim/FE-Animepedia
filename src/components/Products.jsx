import React from 'react'
import { Link } from "react-router-dom";
import "./../style/Product.css"
import client from '../service/axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
  const imageUrl = "http://localhost:5100/";
  const [ products, setProducts ] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [ limit, setLimit ] = useState(12)
  const [ page, setPage ] = useState(1)
  const [search, setSearch] = useState(""); 
  const [ totalPage, setTotalPage ] = useState(1)
  
  const getList = () => {
    client
      .get("/api/v1/products", {
      })
  };

  useEffect(() => {
    const getList = () => {
      client
        .get("/api/v1/products", {
          params: {
            page,
            limit,
            search,
            pageCount
          },
        })
        .then((res) => {
          setProducts((prevState) => res.data.products);
          setPageCount((prevState) => res.data.pageCount);
          setTotalPage((prevState) => res.data.pageCount);
        })
        .catch((err) => {});
    }

    getList();
  }, [limit, page, search, pageCount]);

  const searchHandler = (e) => {
    const { value } = e.target;
    setSearch((prevState) => value);

    if (e.keyCode === 13) {
      doSearch();
    }
  };

  const doSearch = () => {
    getList();
  };
  
  const changePage = (event) => {
    setPage(prevState => parseInt(event.target.innerHTML))
    }

  const renderPage = () => {
   let templatePage = []
   for(let i = 1; i <= totalPage; i++) {
       if(page == i) {
           templatePage.push(<a onClick={changePage} className='active' >{i}</a>)
       } else {
           templatePage.push(<a onClick={changePage} >{i}</a>)
       }
      
   }
   return templatePage
  }

    return (
      <div> 
        <div className="small-container">
          <div className="float-right"> 
            <h1 className="title"> Semua Produk </h1>
            <div className="input-group">
              <input
                type="text"
                id="searchText"
                className="input-search"
                placeholder="Search here..."
                onChange={(e) => searchHandler(e)}
              />
              
                <button
                  className="bton-search"
                  onClick={() => doSearch()}
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
          </div>
          <div className="row-product">
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
                      <h4 className="actualPrice">Rp.{" "}
                        {new Number(product.price).toLocaleString("id-ID")}
                      </h4>   
                      <p>Stock : {product.stock}</p>                  
                  </div>
              </div>    
              );
            })}  
        </div>
          <div className='pagination'>
                <a onClick={changePage}>&laquo;</a>
                  {renderPage()}
                <a onClick={changePage}>&raquo;</a>
            </div>
          </div>
      </div>
    )
}

export default Products
