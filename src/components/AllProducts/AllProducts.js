import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./AllProducts.css"
import { useEffect, useState } from 'react';

const AllProducts = ({setCartCount}) => {
    
  const [products, setProducts] = useState([])
 
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setProducts(data))
  },[])


  
    return (
        <div>
            <h2>All Products</h2>
           <div className="row container">
           {products.map((pd) => ( 
            <SingleProduct setCartCount = {setCartCount} key={pd.id} product={pd}></SingleProduct>
            ))}
           </div>
            
        </div>
    );
};

export default AllProducts;